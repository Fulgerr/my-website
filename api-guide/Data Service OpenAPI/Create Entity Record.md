# Create Entity Record

Creates a new Entity record.

## API Endpoint

`BaseURL/EntityService/<Entity>/insert`

* BaseURL:


## Request Headers

HeaderValueAuthorizationBearer `<access_token>Content-Typeapplication/json`

Replace all the values between the angle brackets `<...>` with their corresponding use-case values.The `<access_token>` is the one you received when you authorized the external application. It is available for 1 hour, then you need to generate a new one, or request a refresh token.


## Query Parameters

Query ParameterData TypeDescriptionDefault ValueexpansionLevel (Optional)int32Specifies the depth of the related records to be retrieved. The value of this parameter can be 1, 2, or 3.2



401 UnauthorizedYou are not authenticated to access Data Service. Make sure your Assistant or Robot is connected to a modern folder in your account.

403 ForbiddenYou don't have permission to access the entity, field or record or you are using an unsupported robot type. Please contact your administrator for necessary permissions.

