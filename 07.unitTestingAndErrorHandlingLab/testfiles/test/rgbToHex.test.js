import { assert } from 'chai';
import { rgbToHexColor } from '../06.rgbToHex.js';

describe('rgbToHexColor', () => {
    it('should return the correct hex color for valid input', () => {
        assert.strictEqual(rgbToHexColor(255, 0, 0), '#FF0000');
        assert.strictEqual(rgbToHexColor(0, 255, 0), '#00FF00');
        assert.strictEqual(rgbToHexColor(0, 0, 255), '#0000FF');
        assert.strictEqual(rgbToHexColor(128, 128, 128), '#808080');
    });

    it('should return undefined for invalid input', () => {
        assert.strictEqual(rgbToHexColor(-1, 0, 0), undefined);
        assert.strictEqual(rgbToHexColor(256, 0, 0), undefined);
        assert.strictEqual(rgbToHexColor(0, -1, 0), undefined);
        assert.strictEqual(rgbToHexColor(0, 256, 0), undefined);
        assert.strictEqual(rgbToHexColor(0, 0, -1), undefined);
        assert.strictEqual(rgbToHexColor(0, 0, 256), undefined);
        assert.strictEqual(rgbToHexColor('red', 0, 0), undefined);
        assert.strictEqual(rgbToHexColor(0, 'green', 0), undefined);
        assert.strictEqual(rgbToHexColor(0, 0, 'blue'), undefined);
    });

    it('should return undefined for non-integer input', () => {
        assert.strictEqual(rgbToHexColor(0.5, 0, 0), undefined);
        assert.strictEqual(rgbToHexColor(0, 0.5, 0), undefined);
        assert.strictEqual(rgbToHexColor(0, 0, 0.5), undefined);
    });
});