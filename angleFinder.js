function getResult() {
    const height = document.getElementById("height").value;
    const trussSpan = document.getElementById("trussSpan").value;
    const rafter = document.getElementById("rafter").value;
    const hypot = Math.hypot(height, (trussSpan / 2));
    const t1 = Math.atan2(height, (trussSpan / 2)) * 180 / Math.PI;
    const t2 = Math.atan2(rafter, hypot) * 180 / Math.PI;
    const result = Number((t1 - t2)).toFixed(2);

    console.log("height: " + height);
    console.log("Truss Span: " + trussSpan);
    console.log("Rafter Depth: " + rafter);
    console.log("Hyptonuse: " + hypot);
    console.log("Angle 1: " + t1);
    console.log("Angle 2: " + t2);
    console.log("The angle of the truss is: " + result + "°");

    document.getElementById("theResult").innerHTML = "This angle is: " + result + "°";
}