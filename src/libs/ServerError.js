export class URLSchemesFormatException extends Error {
    constructor(extraMessage) {
        super(extraMessage);
        this.extraMessage = extraMessage;
        this.message = "URL Schemes does not conform to the expected format";
        this.name = 'URLSchemesFormatException';
    }
}

export class RequestTimeOutException extends Error {
    constructor(extraMessage) {
        super(extraMessage);
        this.extraMessage = extraMessage;
        this.message = "Request time out";
        this.name = 'Server Error';
    }
}
