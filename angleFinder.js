function getResult() {
    const height = document.getElementById("height").value;
    const trussSpan = document.getElementById("trussSpan").value;
    const rafter = document.getElementById("rafter").value;
    const hypot = Math.hypot(height, (trussSpan / 2));
    const t1 = Math.atan2(height, (trussSpan / 2)) * 180 / Math.PI;
    const t2 = Math.atan2(rafter, hypot) * 180 / Math.PI;
    const result = Number((t1 - t2)).toFixed(2);

    document.getElementById("theResult").innerHTML = "This angle is: " + result + "°";
}