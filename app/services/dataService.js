import axios from 'axios';
import appConstants from './constants';
import {toastr} from 'react-redux-toastr';
import Utilities from './utilities';

const apiEndPoints = {
    "getMergeTags": "/getMergeTags",
    "createMergeTags": "/createMergeTag"
};

// urlData is for the url to parse
// For sending body data, we need to add config.data
// Individual functions are available for tweaking a request before sending
class DataService {
	constructor(serviceKey) {
		this.baseUrl = appConstants.getEnvironmentBasedUrl(serviceKey);
	}
	request(url, urlData = {}, config = {}, axiosProperties = {}) {
		// Convert query params to URL search params
		let params = new window.URLSearchParams();
		if(config.params) {
			let keys = Object.keys(config.params);
			keys.forEach((key) => {
				let value = config.params[key];
				if(Array.isArray(value)) {
					value.forEach((value) => {
						params.append(key, value);
					});
				} else {
					params.append(key, value);
				}
			});
		}
		config.params = params;
		config.url = eval('`' + (apiEndPoints[url] || url) + '`');
		config.headers = Object.assign({
			"Content-Type": "application/json",
		}, config.headers || {});
		let instance = axios.create(Object.assign({
			baseURL: this.baseUrl,
			headers: config.headers,
			withCredentials: true
		}, axiosProperties));
		config.requestTime = +new Date();
		return instance.request(config).then((response) => {
			return response.data;
		}, (error) => {
			let errorMessage = Utilities.getIn.call(error, [
				"response",
				"data",
				"message"
			]) || error;
			// Hack for handling messages without JSON response
			let errorData = Utilities.getIn.call(error, [
				"response",
				"data"
			]);
			if(typeof errorData === "string") {
				errorMessage = errorData;
			}
			toastr.error("Error", errorMessage);
			throw error.response;
		});
	}
	post(url, urlData = {}, config = {}, axiosProperties) {
		config.method = "post";
		return this.request(url, urlData, config, axiosProperties);
	}
	delete(url, urlData = {}, config = {}, axiosProperties) {
		config.method = "delete";
		return this.request(url, urlData, config, axiosProperties);
	}
	get(url, urlData = {}, config = {}, axiosProperties) {
		config.method = "get";
		return this.request(url, urlData, config, axiosProperties);
	}
	put(url, urlData = {}, config = {}, axiosProperties) {
		config.method = "put";
		return this.request(url, urlData, config, axiosProperties);
	}
	patch(url, urlData = {}, config = {}, axiosProperties) {
		config.method = "patch";
		return this.request(url, urlData, config, axiosProperties);
	}
}

const cpService = new DataService("apiUrl");
export {cpService};
