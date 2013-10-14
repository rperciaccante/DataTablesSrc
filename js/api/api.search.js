

_api_register( 'search()', function ( input, regex, smart, caseInsen ) {
	return this.iterator( 'table', function ( settings ) {
		if ( ! settings.oFeatures.bFilter ) {
			return;
		}

		_fnFilterComplete( settings, $.extend( {}, settings.oPreviousSearch, {
			"sSearch": input+"",
			"bRegex":  regex === null ? false : regex,
			"bSmart":  smart === null ? true  : smart,
			"bCaseInsensitive": caseInsen === null ? true : caseInsen
		} ), 1 );
	} );
} );


_api_register( [
	'columns().search()',
	'column().search()'
], function ( input, regex, smart, caseInsen ) {
	return this.iterator( 'column', function ( settings, column ) {
		if ( ! settings.oFeatures.bFilter ) {
			return;
		}

		$.extend( settings.aoPreSearchCols[ column ], {
			"sSearch": input+"",
			"bRegex":  regex === null ? false : regex,
			"bSmart":  smart === null ? true  : smart,
			"bCaseInsensitive": caseInsen === null ? true : caseInsen
		} );

		_fnFilterComplete( settings, settings.oPreviousSearch, 1 );
	} );
} );

