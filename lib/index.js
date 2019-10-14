/* @Name musixmatch
*  @Version 0.3.2
*  @author c0b41
*/

import got from 'got';
import qp from 'query-parse';
import methods from  './methods.js';

/**
 * new musixmatch
 * @param {obj} object
 * @param {string} proxy
 */
function musixmatch(obj, proxy = "cors-anywhere.herokuapp.com/"){
	if (!(this instanceof musixmatch)) return new musixmatch(obj, proxy);
	var obj =obj ? obj : {};
	this._datas={};
  	this._datas.apikey =obj.apikey ? obj.apikey :"";
  	this._datas.format = obj.format ? obj.format : "json"; 
  	this.uri="https://" + proxy + "api.musixmatch.com/ws/1.1/";
}

methods.forEach(function(entry){
    musixmatch.prototype[entry.method] = async function(params) {
		const xparams = Object.assign({}, this._datas, params)
		const uri = `${this.uri}${entry.name}?${qp.toString(xparams)}`
		const response = await got(uri)
		if(this._datas.format == "json"){
			return JSON.parse(response.body);
		} else {
			return response.body
		}
	}
})

export default musixmatch
