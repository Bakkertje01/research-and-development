module.exports = [
    'ApiRequest',
    function(
        ApiRequest
    ) {
        return new(function() {
            this.validateSendRequest = function(data) {
                return ApiRequest.post('/identity/wallet/transaction/send/validate', data);
            };

            this.send = function(data) {
                return ApiRequest.post('/identity/wallet/transaction/send', data);
            };

            this.ask = function(data) {
                return ApiRequest.post('/identity/wallet/transaction/ask', data);
            };

            this.askCheck = function(data) {
                return ApiRequest.post('/identity/wallet/transaction/ask/check', data);
            };

            this.askAccept = function(data) {
                return ApiRequest.post('/identity/wallet/transaction/ask/accept', data);
            };;

            this.askDecline = function(data) {
                return ApiRequest.post('/identity/wallet/transaction/ask/decline', data);
            };
        });
    }
];