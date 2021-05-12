const data = [{
	arg: '100',
	title: '100 Continue',
	subtitle: 'HTTP/1.1; RFC 2616',
	imagefile: 'e693dfeb77bb6d4f02a3766a9795dea7f7095a6c.png'
}, {
	arg: '101',
	title: '101 Switching Protocols',
	subtitle: 'HTTP/1.1; RFC 2616',
	imagefile: 'e693dfeb77bb6d4f02a3766a9795dea7f7095a6c.png'
}, {
	arg: '102',
	title: '102 Processing',
	subtitle: 'WebDAV; RFC 2518',
	imagefile: 'e693dfeb77bb6d4f02a3766a9795dea7f7095a6c.png'
}, {
	arg: '200',
	title: '200 OK',
	subtitle: 'HTTP/1.0; HTTP/1.1; RFC 2616',
	imagefile: '52f4d8c7f9b983c02d74b87c5e4f52aa23d87f96.png'
}, {
	arg: '201',
	title: '201 Created',
	subtitle: 'HTTP/1.0; HTTP/1.1; RFC 2616',
	imagefile: '52f4d8c7f9b983c02d74b87c5e4f52aa23d87f96.png'
}, {
	arg: '202',
	title: '202 Accepted',
	subtitle: 'HTTP/1.0; HTTP/1.1; RFC 2616',
	imagefile: '52f4d8c7f9b983c02d74b87c5e4f52aa23d87f96.png'
}, {
	arg: '203',
	title: '203 Non-Authoritative Information',
	subtitle: 'HTTP/1.1; RFC 2616',
	imagefile: '52f4d8c7f9b983c02d74b87c5e4f52aa23d87f96.png'
}, {
	arg: '204',
	title: '204 No Content',
	subtitle: 'HTTP/1.0; HTTP/1.1; RFC 2616',
	imagefile: '52f4d8c7f9b983c02d74b87c5e4f52aa23d87f96.png'
}, {
	arg: '205',
	title: '205 Reset Content',
	subtitle: 'HTTP/1.1; RFC 2616',
	imagefile: '52f4d8c7f9b983c02d74b87c5e4f52aa23d87f96.png'
}, {
	arg: '206',
	title: '206 Partial Content',
	subtitle: 'HTTP/1.1; RFC 2616; RFC 7233',
	imagefile: '52f4d8c7f9b983c02d74b87c5e4f52aa23d87f96.png'
}, {
	arg: '207',
	title: '207 Multi-Status',
	subtitle: 'WebDAV; RFC 4918',
	imagefile: '52f4d8c7f9b983c02d74b87c5e4f52aa23d87f96.png'
}, {
	arg: '208',
	title: '208 Already Reported',
	subtitle: 'WebDAV; RFC 5842',
	imagefile: '52f4d8c7f9b983c02d74b87c5e4f52aa23d87f96.png'
}, {
	arg: '226',
	title: '226 IM Used',
	subtitle: 'RFC 3229',
	imagefile: '52f4d8c7f9b983c02d74b87c5e4f52aa23d87f96.png'
}, {
	arg: '300',
	title: '300 Multiple Choices',
	subtitle: 'HTTP/1.0; HTTP/1.1; RFC 2616',
	imagefile: '912da0eb59cdb42f27a6c39e704a57c991210f11.png'
}, {
	arg: '301',
	title: '301 Moved Permanently',
	subtitle: 'HTTP/1.0; HTTP/1.1; RFC 2616',
	imagefile: '912da0eb59cdb42f27a6c39e704a57c991210f11.png'
}, {
	arg: '302',
	title: '302 Found',
	subtitle: 'HTTP/1.1; RFC 2616',
	imagefile: '912da0eb59cdb42f27a6c39e704a57c991210f11.png'
}, {
	arg: '303',
	title: '303 See Other',
	subtitle: 'HTTP/1.1; RFC 2616',
	imagefile: '912da0eb59cdb42f27a6c39e704a57c991210f11.png'
}, {
	arg: '304',
	title: '304 Not Modified',
	subtitle: 'HTTP/1.0; HTTP/1.1; RFC 2616; RFC 7232',
	imagefile: '912da0eb59cdb42f27a6c39e704a57c991210f11.png'
}, {
	arg: '305',
	title: '305 Use Proxy',
	subtitle: 'HTTP/1.1; RFC 2616',
	imagefile: '912da0eb59cdb42f27a6c39e704a57c991210f11.png'
}, {
	arg: '306',
	title: '306 Switch Proxy',
	subtitle: 'No longer used',
	imagefile: '912da0eb59cdb42f27a6c39e704a57c991210f11.png'
}, {
	arg: '307',
	title: '307 Temporary Redirect',
	subtitle: 'HTTP/1.1; RFC 2616',
	imagefile: '912da0eb59cdb42f27a6c39e704a57c991210f11.png'
}, {
	arg: '308',
	title: '308 Permanent Redirect',
	subtitle: 'RFC 7538',
	imagefile: '912da0eb59cdb42f27a6c39e704a57c991210f11.png'
}, {
	arg: '400',
	title: '400 Bad Request',
	subtitle: 'HTTP/1.0; HTTP/1.1; RFC 2616',
	imagefile: '40a3d7f369161f74d44be256e00afeda0117a32a.png'
}, {
	arg: '401',
	title: '401 Unauthorized',
	subtitle: 'HTTP/1.0; HTTP/1.1; RFC 2616; RFC 7235',
	imagefile: '40a3d7f369161f74d44be256e00afeda0117a32a.png'
}, {
	arg: '402',
	title: '402 Payment Required',
	subtitle: 'HTTP/1.1; RFC 2616',
	imagefile: '40a3d7f369161f74d44be256e00afeda0117a32a.png'
}, {
	arg: '403',
	title: '403 Forbidden',
	subtitle: 'HTTP/1.0; HTTP/1.1; RFC 2616',
	imagefile: '40a3d7f369161f74d44be256e00afeda0117a32a.png'
}, {
	arg: '404',
	title: '404 Not Found',
	subtitle: 'HTTP/1.0; HTTP/1.1; RFC 2616',
	imagefile: '40a3d7f369161f74d44be256e00afeda0117a32a.png'
}, {
	arg: '405',
	title: '405 Method Not Allowed',
	subtitle: 'HTTP/1.1; RFC 2616',
	imagefile: '40a3d7f369161f74d44be256e00afeda0117a32a.png'
}, {
	arg: '406',
	title: '406 Not Acceptable',
	subtitle: 'HTTP/1.1; RFC 2616',
	imagefile: '40a3d7f369161f74d44be256e00afeda0117a32a.png'
}, {
	arg: '407',
	title: '407 Proxy Authentication Required',
	subtitle: 'HTTP/1.1; RFC 2616; RFC 7235',
	imagefile: '40a3d7f369161f74d44be256e00afeda0117a32a.png'
}, {
	arg: '408',
	title: '408 Request Timeout',
	subtitle: 'HTTP/1.1; RFC 2616',
	imagefile: '40a3d7f369161f74d44be256e00afeda0117a32a.png'
}, {
	arg: '409',
	title: '409 Conflict',
	subtitle: 'HTTP/1.1; RFC 2616',
	imagefile: '40a3d7f369161f74d44be256e00afeda0117a32a.png'
}, {
	arg: '410',
	title: '410 Gone',
	subtitle: 'HTTP/1.1; RFC 2616',
	imagefile: '40a3d7f369161f74d44be256e00afeda0117a32a.png'
}, {
	arg: '411',
	title: '411 Length Required',
	subtitle: 'HTTP/1.1; RFC 2616',
	imagefile: '40a3d7f369161f74d44be256e00afeda0117a32a.png'
}, {
	arg: '412',
	title: '412 Precondition Failed',
	subtitle: 'HTTP/1.1; RFC 2616; RFC 7232',
	imagefile: '40a3d7f369161f74d44be256e00afeda0117a32a.png'
}, {
	arg: '413',
	title: '413 Payload Too Large',
	subtitle: 'HTTP/1.1; RFC 2616; RFC 7231',
	imagefile: '40a3d7f369161f74d44be256e00afeda0117a32a.png'
}, {
	arg: '414',
	title: '414 URI Too Long',
	subtitle: 'HTTP/1.1; RFC 2616; RFC 7231',
	imagefile: '40a3d7f369161f74d44be256e00afeda0117a32a.png'
}, {
	arg: '415',
	title: '415 Unsupported Media Type',
	subtitle: 'HTTP/1.1; RFC 2616',
	imagefile: '40a3d7f369161f74d44be256e00afeda0117a32a.png'
}, {
	arg: '416',
	title: '416 Range Not Satisfiable',
	subtitle: 'HTTP/1.1; RFC 2616; RFC 7233',
	imagefile: '40a3d7f369161f74d44be256e00afeda0117a32a.png'
}, {
	arg: '417',
	title: '417 Expectation Failed',
	subtitle: 'HTTP/1.1; RFC 2616',
	imagefile: '40a3d7f369161f74d44be256e00afeda0117a32a.png'
}, {
	arg: '418',
	title: '418 I\'m a teapot',
	subtitle: 'RFC 2324',
	imagefile: '40a3d7f369161f74d44be256e00afeda0117a32a.png'
}, {
	arg: '421',
	title: '421 Misdirected Request',
	subtitle: 'RFC 7540',
	imagefile: '40a3d7f369161f74d44be256e00afeda0117a32a.png'
}, {
	arg: '422',
	title: '422 Unprocessable Entity',
	subtitle: 'WebDAV; RFC 4918',
	imagefile: '40a3d7f369161f74d44be256e00afeda0117a32a.png'
}, {
	arg: '423',
	title: '423 Locked',
	subtitle: 'WebDAV; RFC 4918',
	imagefile: '40a3d7f369161f74d44be256e00afeda0117a32a.png'
}, {
	arg: '424',
	title: '424 Failed Dependency',
	subtitle: 'WebDAV; RFC 4918',
	imagefile: '40a3d7f369161f74d44be256e00afeda0117a32a.png'
}, {
	arg: '425',
	title: '425 Too Early',
	subtitle: 'RFC 8470',
	imagefile: '40a3d7f369161f74d44be256e00afeda0117a32a.png'
}, {
	arg: '426',
	title: '426 Upgrade Required',
	imagefile: '40a3d7f369161f74d44be256e00afeda0117a32a.png'
}, {
	arg: '428',
	title: '428 Precondition Required',
	subtitle: 'RFC 6585',
	imagefile: '40a3d7f369161f74d44be256e00afeda0117a32a.png'
}, {
	arg: '429',
	title: '429 Too Many Requests',
	subtitle: 'RFC 6585',
	imagefile: '40a3d7f369161f74d44be256e00afeda0117a32a.png'
}, {
	arg: '431',
	title: '431 Request Header Fields Too Large',
	subtitle: 'RFC 6585',
	imagefile: '40a3d7f369161f74d44be256e00afeda0117a32a.png'
}, {
	arg: '444',
	title: '444 Connection Closed Without Response',
	subtitle: 'nginx',
	imagefile: '40a3d7f369161f74d44be256e00afeda0117a32a.png'
}, {
	arg: '451',
	title: '451 Unavailable For Legal Reasons',
	subtitle: 'RFC 7725',
	imagefile: '40a3d7f369161f74d44be256e00afeda0117a32a.png'
}, {
	arg: '499',
	title: '499 Client Closed Request',
	imagefile: '40a3d7f369161f74d44be256e00afeda0117a32a.png'
}, {
	arg: '500',
	title: '500 Internal Server Error',
	subtitle: 'HTTP/1.0; HTTP/1.1; RFC 2616',
	imagefile: '4fd2f6e58877424c90a92e44a61aef61eee99998.png'
}, {
	arg: '501',
	title: '501 Not Implemented',
	subtitle: 'HTTP/1.0; HTTP/1.1; RFC 2616',
	imagefile: '4fd2f6e58877424c90a92e44a61aef61eee99998.png'
}, {
	arg: '502',
	title: '502 Bad Gateway',
	subtitle: 'HTTP/1.0; HTTP/1.1; RFC 2616',
	imagefile: '4fd2f6e58877424c90a92e44a61aef61eee99998.png'
}, {
	arg: '503',
	title: '503 Service Unavailable',
	subtitle: 'HTTP/1.0; HTTP/1.1; RFC 2616',
	imagefile: '4fd2f6e58877424c90a92e44a61aef61eee99998.png'
}, {
	arg: '504',
	title: '504 Gateway Timeout',
	subtitle: 'HTTP/1.1; RFC 2616',
	imagefile: '4fd2f6e58877424c90a92e44a61aef61eee99998.png'
}, {
	arg: '505',
	title: '505 HTTP Version Not Supported',
	subtitle: 'HTTP/1.1; RFC 2616',
	imagefile: '4fd2f6e58877424c90a92e44a61aef61eee99998.png'
}, {
	arg: '506',
	title: '506 Variant Also Negotiates',
	subtitle: 'RFC 2295',
	imagefile: '4fd2f6e58877424c90a92e44a61aef61eee99998.png'
}, {
	arg: '507',
	title: '507 Insufficient Storage',
	subtitle: 'WebDAV; RFC 4918',
	imagefile: '4fd2f6e58877424c90a92e44a61aef61eee99998.png'
}, {
	arg: '508',
	title: '508 Loop Detected',
	subtitle: 'WebDAV; RFC 5842',
	imagefile: '4fd2f6e58877424c90a92e44a61aef61eee99998.png'
}, {
	arg: '510',
	title: '510 Not Extended',
	subtitle: 'RFC 2774',
	imagefile: '4fd2f6e58877424c90a92e44a61aef61eee99998.png'
}, {
	arg: '511',
	title: '511 Network Authentication Required',
	subtitle: 'RFC 6585',
	imagefile: '4fd2f6e58877424c90a92e44a61aef61eee99998.png'
}, {
	arg: '599',
	title: '599 Network Connect Timeout Error',
	subtitle: 'nginx',
	imagefile: '4fd2f6e58877424c90a92e44a61aef61eee99998.png'
}];

export default data;
