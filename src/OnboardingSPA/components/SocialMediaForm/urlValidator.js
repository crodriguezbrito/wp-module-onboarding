
const SocialMediaSites = {
    FACEBOOK: 'facebook',
    TWITTER: 'twitter',
    INSTAGRAM: 'instagram',
    YOUTUBE: 'youtube',
    LINKEDIN: 'linkedin',
    YELP: 'yelp',
    TIKTOK: 'tiktok',
}

let errorsDup;
let setErrorsDup;

const displayErrors = ( categ, isError ) => {
    if(isError){
        if ( !errorsDup.includes( categ ) ) {
            setErrorsDup( [ ...errorsDup, categ ]);
        }
    } else {
        var errorsFiltered = errorsDup.filter( function( ele ) { return ele !== categ } );
        setErrorsDup(errorsFiltered);
    }
}

const handleCommonValidation = ( categ, url ) => {
    const validationExemption = new Set(["twitter", "instagram", "youtube"]);

    // Skip urlValidation as sites like twitter might be just a handle
    if(validationExemption.has(categ))
        return url;

    let isError = true;
    let wwwExp = /.*www\./gi;
    let protocolExp = /https?:\/\//gi;
    let urlExp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    let wwwRegex = new RegExp(wwwExp);
    let protocolRegex = new RegExp(protocolExp);
    let urlRegex = new RegExp(urlExp);

    if( url === '' )
        isError = false;
    
    let urlExtract = url.match(urlRegex);
    if( urlExtract ) {
        let finalUrl = urlExtract[0];
        // Check if the link has the 'www.' prefix in it
        let iswwwValid = urlExtract[0].match(wwwRegex);
        // Check if the link has the 'https://' prefix in it
        let isProtocolValid = urlExtract[0].match(protocolRegex);

        if( !iswwwValid && !isProtocolValid ) {
            finalUrl = 'https://www.' + finalUrl;
        }
        else if( !iswwwValid && isProtocolValid ){
            finalUrl = finalUrl.replace(/https?:\/\//gi, "https://www.");
        }
        else if ( iswwwValid && !isProtocolValid ){
            finalUrl = 'https://' + finalUrl;
        }
        console.log(finalUrl);
        isError = false;
    }

    displayErrors( categ, isError );
    return url;
}

const urlValidator = ( categ, url, errors, setErrors ) => {
    errorsDup = errors;
    setErrorsDup = setErrors;
    url = handleCommonValidation( categ, url, errors, setErrors );
    switch ( categ ) {
        case SocialMediaSites.FACEBOOK: 
            break;
        case SocialMediaSites.TWITTER: 
            
            break;
        case SocialMediaSites.INSTAGRAM: 
            
            break;
        case SocialMediaSites.YOUTUBE: 
            
            break;
        case SocialMediaSites.LINKEDIN: 
            
            break;
        case SocialMediaSites.YELP: 
            
            break;
        case SocialMediaSites.TIKTOK: 
            
            break;
    }
}

export default urlValidator;
