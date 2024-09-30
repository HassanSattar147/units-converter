function convertUnits(changedInput) {
  const inValue = parseFloat(document.getElementById("in").value) || 0;
  const cmValue = parseFloat(document.getElementById("cm").value) || 0;
  const mmValue = parseFloat(document.getElementById("mm").value) || 0;
  const pxValue = parseFloat(document.getElementById("px").value) || 0;
  const dpiValue = parseFloat(document.getElementById("dpi").value) || 72; // Default DPI is 72

  switch (changedInput) {
    case "in":
      document.getElementById("cm").value = (inValue * 2.54).toFixed(2);
      document.getElementById("mm").value = (inValue * 25.4).toFixed(2);
      document.getElementById("px").value = (inValue * dpiValue).toFixed(2);
      break;
    case "cm":
      document.getElementById("in").value = (cmValue / 2.54).toFixed(2);
      document.getElementById("mm").value = (cmValue * 10).toFixed(2);
      document.getElementById("px").value = (
        (cmValue / 2.54) *
        dpiValue
      ).toFixed(2);
      break;
    case "mm":
      document.getElementById("in").value = (mmValue / 25.4).toFixed(2);
      document.getElementById("cm").value = (mmValue / 10).toFixed(2);
      document.getElementById("px").value = (
        (mmValue / 25.4) *
        dpiValue
      ).toFixed(2);
      break;
    case "px":
      document.getElementById("in").value = (pxValue / dpiValue).toFixed(2);
      document.getElementById("cm").value = (
        (pxValue / dpiValue) *
        2.54
      ).toFixed(2);
      document.getElementById("mm").value = (
        (pxValue / dpiValue) *
        25.4
      ).toFixed(2);
      break;
    case "dpi":
      document.getElementById("px").value = (inValue * dpiValue).toFixed(2);
      break;
    default:
      break;
  }
}
