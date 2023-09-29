import "./styles.css";
import { fabric } from "fabric";

fabric.Object.NUM_FRACTION_DIGITS = 8;
var canvas = new fabric.Canvas("cnvs", {
  preserveObjectStacking: true
});
canvas.imageSmoothingQuality = "high";
canvas.setHeight(400);
canvas.setWidth(400);
canvas.renderAll();

canvas.loadFromJSON({
  objects: [
    {
      type: "text",
      version: "5.2.0",
      originX: "left",
      originY: "top",
      left: 21,
      top: 21,
      width: 356,
      height: 178,
      fill: "#000000",
      stroke: "#FFBEDA",
      strokeWidth: 0,
      strokeDashArray: null,
      strokeLineCap: "round",
      strokeDashOffset: 0,
      strokeLineJoin: "round",
      strokeUniform: false,
      strokeMiterLimit: 4,
      scaleX: 1,
      scaleY: 1,
      angle: 0,
      flipX: false,
      flipY: false,
      opacity: 1,
      shadow: null,
      visible: true,
      backgroundColor: "",
      fillRule: "nonzero",
      paintFirst: "stroke",
      globalCompositeOperation: "source-over",
      skewX: 0,
      skewY: 0,
      erasable: false,
      fontFamily: "MS Gothic",
      fontWeight: "normal",
      fontSize: "30",
      text: "あいうえおお",
      underline: false,
      overline: false,
      linethrough: false,
      textAlign: "center",
      fontStyle: "normal",
      lineHeight: 0.9,
      textBackgroundColor: "",
      charSpacing: 0,
      styles: {},
      direction: "ltr",
      path: {
        type: "path",
        version: "5.2.0",
        originX: "left",
        originY: "top",
        left: 0,
        top: 100,
        width: 356,
        height: 178,
        fill: "transparent",
        stroke: "#000000",
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeDashOffset: 0,
        strokeLineJoin: "miter",
        strokeUniform: false,
        strokeMiterLimit: 4,
        scaleX: 1,
        scaleY: 1,
        angle: 0,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: null,
        visible: false,
        backgroundColor: "",
        fillRule: "nonzero",
        paintFirst: "stroke",
        globalCompositeOperation: "source-over",
        skewX: 0,
        skewY: 0,
        erasable: true,
        path: [
          ["M", -178, 0],
          [
            "C",
            -178,
            -98.30668546988123,
            -98.30668546988126,
            -177.99999999999997,
            -2.842170943040401e-14,
            -178
          ],
          [
            "C",
            98.30668546988119,
            -178.00000000000003,
            178,
            -98.30668546988127,
            178,
            -4.359742604964577e-14
          ]
        ]
      },
      pathStartOffset: 0,
      pathSide: "left",
      pathAlign: "center"
    }
  ]
});
canvas.renderAll();
var sel = new fabric.ActiveSelection(canvas.getObjects(), {
  canvas: canvas
});
canvas.setActiveObject(sel);
canvas.renderAll();

/**
 *
 *
 *
 **/
