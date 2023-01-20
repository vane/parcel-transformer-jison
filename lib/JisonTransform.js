var $4TkYi$parcelplugin = require("@parcel/plugin");
var $4TkYi$jison = require("jison");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $9f4d9ce37e528e2f$export$2e2bcd8739ae039);


var $9f4d9ce37e528e2f$export$2e2bcd8739ae039 = new (0, $4TkYi$parcelplugin.Transformer)({
    async transform ({ asset: asset  }) {
        const source = await asset.getCode();
        const parser = new (0, ($parcel$interopDefault($4TkYi$jison))).Jison.Parser(source);
        asset.type = "js";
        asset.setCode(parser.generate());
        // Return the asset
        return [
            asset
        ];
    }
});


//# sourceMappingURL=JisonTransform.js.map
