/**
 * Created by anth on 21.05.2017.
 */
const zlib = require("zlib");
const Buffer = require('buffer').Buffer;


exports = module.exports = {
    /**
     * Parse blueprint string in .15 format
     * @param str blueprint string to parse
     * @returns {Object} Factorio blueprint object
     */
    decode: (str) => {
        let data = null;
        try {
            data = JSON.parse(zlib.inflateSync(Buffer.from(str.slice(1), 'base64')).toString('utf8'));
        } catch (e) {
            throw e;
        }

        return data;
    },

    /**
     * Encode an arbitrary object
     * @param obj
     * @returns {string} object encoded in Factorio .15 format
     */
    encode: (obj) => {
        return '0' + zlib.deflateSync(JSON.stringify(obj)).toString('base64');
    }
};