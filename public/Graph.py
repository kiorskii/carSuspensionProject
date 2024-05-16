import math
from typing import Optional
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
import matplotlib.pyplot as plt
import io
import base64

app = FastAPI()

@app.get("/", response_class=HTMLResponse)
async def get_form(request: Request):
    return """
    <html>
        <body>
            <form action="/calculate" method="get">
                <label>Деформация пружины: <input type="number" name="deformation" required></label><br>
                <label>Направленная скорость: <input type="number" name="velocity" required></label><br>
                <label>Время: <input type="number" name="time" required></label><br>
                <label>Жесткость пружины: <input type="number" name="stiffness" required></label><br>
                <label>Вязкость среды: <input type="number" name="viscosity" required></label><br>
                <label>Масса объекта: <input type="number" name="mass" required></label><br>
                <input type="submit" value="Вычислить колебания">
            </form>
        </body>
    </html>
    """

@app.get("/calculate", response_class=HTMLResponse)
async def calculate_oscillations(
    deformation: float,
    velocity: float,
    time: float,
    stiffness: float,
    viscosity: float,
    mass: float,
):
    k = math.sqrt(stiffness / mass)
    n = viscosity / (2 * mass)

    if n >= k:
        result = "Среда с большой вязкостью. Возникает апериодическое движение"
        return HTMLResponse(content=result)

    phi0 = math.atan(velocity / (k * deformation))
    A = deformation / math.cos(phi0)

    t = [i / 10 for i in range(int(time * 10) + 1)]
    y = [A * math.exp(-n * ti) * math.cos(math.sqrt(k ** 2 - n ** 2) * ti + phi0) for ti in t]

    fig, ax = plt.subplots(figsize=(8, 6))
    ax.plot(t, y)
    ax.set_title("Затухающие колебания подвески автомобиля")
    ax.set_xlabel("Время")
    ax.set_ylabel("Деформация пружины")

    buf = io.BytesIO()
    fig.savefig(buf, format="png")
    buf.seek(0)
    img_base64 = base64.b64encode(buf.read()).decode("utf-8")

    formula = r"$y(t) = Ae^{-nt}\cos(\sqrt{k^2-n^2}t+\phi_0)$"
    result = f"""
    <img src="data:image/png;base64,{img_base64}">
    <p>Формула колебаний: {formula}</p>
    """

    return HTMLResponse(content=result)