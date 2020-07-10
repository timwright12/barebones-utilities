/**
 * Get URL params
 *
 * @param {String} query - The location.search query
 * @returns {Object} - the params
 */
const getUrlParams = ( query ) => {

	const vars = query.split( '&' );
	const queryString = {};

	for ( let i = 0; i < vars.length; i++ ) {
		const pair = vars[i].split( '=' );
		const key = decodeURIComponent( pair[0].replace( '?', '' ) );
		const value = decodeURIComponent( pair[1] );

		if ( 'undefined' === typeof queryString[key] ) {
			queryString[key] = decodeURIComponent( value );
		} else if ( 'string' === typeof queryString[key] ) {
			const arr = [queryString[key], decodeURIComponent( value )];
			queryString[key] = arr;
		} else {
			queryString[key].push( decodeURIComponent( value ) );
		}
	}
	return queryString;

};

export default getUrlParams;
