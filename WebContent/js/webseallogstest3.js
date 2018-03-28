/**
 * 
 */

var PROD_INDEX=0;
var STAG_INDEX=1;
var TEST_INDEX=2;

var PROD_ACCODION_INITIALIZED=false;
var STAG_ACCODION_INITIALIZED=false;
var TEST_ACCODION_INITIALIZED=false;

var PROD_LOGS_ALL_SELECTED=false;
var STAG_LOGS_ALL_SELECTED=false;
var TEST_LOGS_ALL_SELECTED=false;


//var STAG_HOST="https://dal9-ppd-cwsicio2-03.sec.ibm.com:446";
//var DEV_HOST="https://dal9-ppd-cwsicio2-03.sec.ibm.com:446";
//var PROD_HOST="https://dal9-ppd-cwsicio2-03.sec.ibm.com:446";

var STAG_HOST="http://localhost:9080";
var TEST_HOST="http://localhost:9080";
var PROD_HOST="http://localhost:9080";

var LOGS_FETCH_URI="/w3id-svc/getInfraLogs";
var LOGS_LISTING_URI="/w3id-svc/getInfraLogs";


//var logadmin_user;
//var logadmin_pw;


var PROD_INST_WEBSEAL = 'ICIO1_Domain'; 
//var PROD_HOSTS_WEBSEAL = [ 
//                              'dal9-prd-cwsicio1-01.sec.ibm.com'
//                            , 'dal9-prd-cwsicio1-02.sec.ibm.com'
//                            , 'dal9-prd-cwsicio1-03.sec.ibm.com'
//                            , 'dal9-prd-cwsicio1-04.sec.ibm.com'
//                          ];
//var PROD_HOSTS_ISAM = [ 
//    'dal9-prd-cwsicio1-01.sec.ibm.com'
//  , 'dal9-prd-cwsicio1-02.sec.ibm.com'
//  , 'dal9-prd-cwsicio1-03.sec.ibm.com'
//  , 'dal9-prd-cwsicio1-04.sec.ibm.com'
//];
//
//var PROD_HOSTS_ISAM_FED = [ 
//    'dal9-prd-cwsicio2-01.sec.ibm.com'
//  , 'dal9-prd-cwsicio2-02.sec.ibm.com'
//];
//
//var PROD_HOSTS_TFIM = [ 
//    'dal9-prd-cfoicio1-01.sec.ibm.com'
//  , 'dal9-prd-cfoicio1-02.sec.ibm.com'
//  , 'dal9-prd-cfoicio1-01.sec.ibm.com'
//  , 'dal9-prd-cfoicio1-02.sec.ibm.com'
//];
//var PROD_INST_TFIM = [ 
//    'TFIM_Server1'
//  , 'TFIM_Server2'
//  , 'TFIM_Server3'
//  , 'TFIM_Server4'
//];
var PROD_HOSTS_WEBSEAL = [ 
    'host1'
  , 'host2'
  , 'host3'
  , 'host4'
];
var PROD_HOSTS_ISAM = [ 
    'host1'
  , 'host2'
  , 'host3'
  , 'host4'
];

var PROD_HOSTS_ISAM_FED = [ 
    'host1'
  , 'host2'
];

var PROD_HOSTS_TFIM = [ 
    'host1'
  , 'host2'
  , 'host3'
  , 'host4'
];
var PROD_INST_TFIM = [ 
    'host1'
  , 'host2'
  , 'host3'
  , 'host4'
];


var STAG_INST_WEBSEAL = 'ICIO2_Domain'; 
var STAG_HOSTS_WEBSEAL = [
                            'dal9-ppd-cwsicio2-01a.sec.ibm.com'
                           ,'dal9-ppd-cwsicio2-02a.sec.ibm.com'
                           ,'dal9-ppd-cwsicio2-03a.sec.ibm.com'
                          ];

var STAG_HOSTS_ISAM = [ 
    'dal9-ppd-cwsicio2-01a.sec.ibm.com'
   ,'dal9-ppd-cwsicio2-02a.sec.ibm.com'
   ,'dal9-ppd-cwsicio2-03a.sec.ibm.com'
];

var STAG_HOSTS_ISAM_FED = [ 
    'dal9-ppd-cwsicio2-01.sec.ibm.com'
  , 'dal9-ppd-cwsicio2-02.sec.ibm.com'
];

var STAG_HOSTS_TFIM = [ 
    'dal9-ppd-cfoicio1-01.sec.ibm.com'
  , 'dal9-ppd-cfoicio1-02.sec.ibm.com'
  , 'dal9-ppd-cfoicio1-01.sec.ibm.com'
  , 'dal9-ppd-cfoicio1-02.sec.ibm.com'
];
var STAG_INST_TFIM = [ 
    'TFIM_Server1'
  , 'TFIM_Server2'
  , 'TFIM_Server3'
  , 'TFIM_Server4'
];

var TEST_INST_WEBSEAL = 'ICIO3_Domain'; 
var TEST_HOSTS_WEBSEAL = [
                            'dal9-dev-cwsicio3-01a.sec.ibm.com'
                           ,'dal9-dev-cwsicio3-02a.sec.ibm.com'
                           ,'dal9-dev-cwsicio3-03a.sec.ibm.com'
                          ];

var TEST_HOSTS_ISAM = [ 
    'dal9-dev-cwsicio3-01a.sec.ibm.com'
    ,'dal9-dev-cwsicio3-02a.sec.ibm.com'
    ,'dal9-dev-cwsicio3-03a.sec.ibm.com'
];

var TEST_HOSTS_ISAM_FED = [ 
    'dal9-dev-cwsicio3-01a.sec.ibm.com'
   ,'dal9-dev-cwsicio3-02a.sec.ibm.com'
];

var TEST_HOSTS_TFIM = [ 
    'dal9-ppd-cfoicio1-01.sec.ibm.com'
  , 'dal9-ppd-cfoicio1-02.sec.ibm.com'
];
var TEST_INST_TFIM = [ 
    'TFIM_Server1'
  , 'TFIM_Server2'
];

var elements = [];

var rootNodeElements = [
                    	{
                    		"displayText"		: "WebSEAL Request",
                    		"shortText"			: "req"
                    	},
                    	{
                    		"displayText"	: "WebSEAL Message",
                    		"shortText"		: "msg"
                    	},
                    	{
                    		"displayText"	: "ISAM Message Logs",
                    		"shortText"		: "mes"
                    	}
]; // end rootNodeElements declaration

var rpElements = [
	{
		"displayText"		: "Request",
		"shortText"			: "req",
		"serverType"		: "rp"
	},
	{
		"displayText"	: "Message",
		"shortText"		: "msg",
		"serverType"	: "rp"
	}
]; // end rootNodeElements declaration

var isamElements = [
	{
		"displayText"	: "Message",
		"shortText"		: "mes",
		"serverType"	: "isam"
	}
]; // end rootNodeElements declaration

var isamFedElements = [
	{
		"displayText"	: "Runtime",
		"shortText"		: "rt",
		"serverType"	: "isam-fed"
	},
	{
		"displayText"	: "Runtime FFDC",
		"shortText"		: "ffdc",
		"serverType"	: "isam-fed"
	}
]; // end rootNodeElements declaration

var tfimElements = [
	{
		"displayText"	: "Trace",
		"shortText"		: "trace",
		"serverType"	: "tfim"
	}
]; // end rootNodeElements declaration

var rpLogsToFetch = [];
var isamLogsToFetch = [];
var isamFedLogsToFetch = [];
var tfimLogsToFetch = [];

//var traceLogs = [];

var allLogsToFetch = [];

var count = 0;

var directive_download_timeframe = "download-timeframe";
var directive_search_timeframe = "search-timeframe";

var today = new Date();
var dateEarlyLimit;
var dateEarlyLimitFormattedString;
var limit_timeframe = -6;


$(document).ready(function() {

	initControls();
	
	initTimeframeLimit();
		
//	$.ajaxSetup({
//		  headers: {
//		    'Authorization': "Basic " + (logadmin_user + ":" + logadmin_pw)
//		  }
//		});

	
	$('#btn-selectall-prod').on('click', function(e) {
		if (PROD_LOGS_ALL_SELECTED == true) {
			deSelectAll("Prod", PROD_HOSTS_WEBSEAL, rpElements, PROD_LOGS_ALL_SELECTED);
			deSelectAll("Prod", PROD_HOSTS_ISAM, isamElements, PROD_LOGS_ALL_SELECTED);
			deSelectAll("Prod", PROD_HOSTS_ISAM_FED, isamFedElements, PROD_LOGS_ALL_SELECTED);
			deSelectAll("Prod", PROD_HOSTS_TFIM, tfimElements, PROD_LOGS_ALL_SELECTED);
			$('#btn-selectall-prod').text('Select All');
			PROD_LOGS_ALL_SELECTED = false;
		} else {
			selectAll("Prod", PROD_HOSTS_WEBSEAL, rpElements, PROD_LOGS_ALL_SELECTED);
			selectAll("Prod", PROD_HOSTS_ISAM, isamElements, PROD_LOGS_ALL_SELECTED);
			selectAll("Prod", PROD_HOSTS_ISAM_FED, isamFedElements, PROD_LOGS_ALL_SELECTED);
			selectAll("Prod", PROD_HOSTS_TFIM, tfimElements, PROD_LOGS_ALL_SELECTED);
			$('#btn-selectall-prod').text('Unselect All');
			PROD_LOGS_ALL_SELECTED = true;
		}	
	});
	
	$('#btn-selectall-stag').on('click', function(e) {
		if (STAG_LOGS_ALL_SELECTED == true) {
//			deSelectAll("Stag", STAG_HOSTS_WEBSEALS, rpElements, STAG_LOGS_ALL_SELECTED);
			deSelectAll("Stag", STAG_HOSTS_WEBSEAL, rpElements, STAG_LOGS_ALL_SELECTED);
			deSelectAll("Stag", STAG_HOSTS_ISAM, isamElements, STAG_LOGS_ALL_SELECTED);
			deSelectAll("Stag", STAG_HOSTS_ISAM_FED, isamFedElements, STAG_LOGS_ALL_SELECTED);
			deSelectAll("Stag", STAG_HOSTS_TFIM, tfimElements, STAG_LOGS_ALL_SELECTED);
			$('#btn-selectall-stag').text('Select All');
			STAG_LOGS_ALL_SELECTED = false;
		} else {
//			selectAll("Stag", STAG_HOSTS_WEBSEALS, rpElements, STAG_LOGS_ALL_SELECTED);
			selectAll("Stag", STAG_HOSTS_WEBSEAL, rpElements, STAG_LOGS_ALL_SELECTED);
			selectAll("Stag", STAG_HOSTS_ISAM, isamElements, STAG_LOGS_ALL_SELECTED);
			selectAll("Stag", STAG_HOSTS_ISAM_FED, isamFedElements, STAG_LOGS_ALL_SELECTED);
			selectAll("Stag", STAG_HOSTS_TFIM, tfimElements, STAG_LOGS_ALL_SELECTED);
			$('#btn-selectall-stag').text('Unselect All');
			STAG_LOGS_ALL_SELECTED = true;
		}
	});

	$('#btn-selectall-test').on('click', function(e) {
		if (TEST_LOGS_ALL_SELECTED == true) {
			deSelectAll("Test", TEST_HOSTS_WEBSEAL, rpElements, TEST_LOGS_ALL_SELECTED);
			deSelectAll("Test", TEST_HOSTS_ISAM, isamElements, TEST_LOGS_ALL_SELECTED);
			deSelectAll("Test", TEST_HOSTS_ISAM_FED, isamFedElements, TEST_LOGS_ALL_SELECTED);
			deSelectAll("Test", TEST_HOSTS_TFIM, tfimElements, TEST_LOGS_ALL_SELECTED);
			$('#btn-selectall-test').text('Select All');
			TEST_LOGS_ALL_SELECTED = false;
		} else {
			selectAll("Test", TEST_HOSTS_WEBSEAL, rpElements, TEST_LOGS_ALL_SELECTED);
			selectAll("Test", TEST_HOSTS_ISAM, isamElements, TEST_LOGS_ALL_SELECTED);
			selectAll("Test", TEST_HOSTS_ISAM_FED, isamFedElements, TEST_LOGS_ALL_SELECTED);
			selectAll("Test", TEST_HOSTS_TFIM, tfimElements, TEST_LOGS_ALL_SELECTED);
			$('#btn-selectall-test').text('Unselect All');
			TEST_LOGS_ALL_SELECTED = true;
		}	
	});
	
	$('#btn-download-prod').on('click', function(e) {
		$('#dialog-download-prod').dialog("open");
	});

	$('#btn-download-stag').on('click', function(e) {
		$('#dialog-download-stag').dialog("open");
	});

	$('#btn-download-test').on('click', function(e) {
		$('#dialog-download-test').dialog("open");
	});

	
	$('#btn-search-prod').on('click', function(e) {
		$('#dialog-search-prod').dialog("open");
	});

	$('#btn-search-stag').on('click', function(e) {
		$('#dialog-search-stag').dialog("open");
	});


	$('#btn-search-test').on('click', function(e) {
		$('#dialog-search-test').dialog("open");
		
	});

	$('#accordion-logs-server').on('click', function(e) {

		if ($(this).accordion( "option", "active" ) == PROD_INDEX) {
			if (PROD_ACCODION_INITIALIZED == false) {
//				getLogsListing("prod");
				initSelections("prod");
				if (PROD_LOGS_ALL_SELECTED == true) {
					$('#btn-selectall-prod').text('Unselect All');
				} else {
					$('#btn-selectall-prod').text('Select All');
				}
			}
			PROD_ACCODION_INITIALIZED = true;
//			STAG_ACCODION_INITIALIZED = false;
		} else if ($(this).accordion( "option", "active" ) == STAG_INDEX) {
			if (STAG_ACCODION_INITIALIZED == false) {
//				getLogsListing("staging");
				initSelections("staging");
				if (STAG_LOGS_ALL_SELECTED == true) {
					$('#btn-selectall-stag').text('Unselect All');
				} else {
					$('#btn-selectall-stag').text('Select All');
				}
			}
			STAG_ACCODION_INITIALIZED = true;
		} else if ($(this).accordion( "option", "active" ) == TEST_INDEX) {
			if (TEST_ACCODION_INITIALIZED == false) {
//				getLogsListing("test");
				initSelections("test");
				if (TEST_LOGS_ALL_SELECTED == true) {
					$('#btn-selectall-test').text('Unselect All');
				} else {
					$('#btn-selectall-test').text('Select All');
				}
			} 
			TEST_ACCODION_INITIALIZED = true;
		}

		
	});
	
	$('#radio-dialog-download-latest-prod').on('change', function(e) {
		$('#radio-dialog-download-all-prod').prop('checked', false);
		$('#radio-dialog-download-timeframe-prod').prop('checked', false);
		$('#radio-dialog-retrieve-download-prod').prop('checked', false);
		$('#text-dialog-retrieve-download-prod').prop('disabled', true);
		$('#lbl-dialog-download-prod').hide();
		$('#dialog-download-timeframe-prod').hide();
	});
	
	$('#radio-dialog-download-all-prod').on('change', function(e) {
		$('#radio-dialog-download-latest-prod').prop('checked', false);
		$('#radio-dialog-download-timeframe-prod').prop('checked', false);
		$('#radio-dialog-retrieve-download-prod').prop('checked', false);
		$('#text-dialog-retrieve-download-prod').prop('disabled', true);
		$('#lbl-dialog-download-prod').hide();
		$('#dialog-download-timeframe-prod').hide();
	});

	$('#radio-dialog-download-timeframe-prod').on('change', function(e) {
		$('#radio-dialog-download-latest-prod').prop('checked', false);
		$('#radio-dialog-download-all-prod').prop('checked', false);
		$('#radio-dialog-retrieve-download-prod').prop('checked', false);
		$('#text-dialog-retrieve-download-prod').prop('disabled', true);
		$('#lbl-dialog-download-prod').hide();
		$('#dialog-download-timeframe-prod').show();
	});

	$('#radio-dialog-retrieve-download-prod').on('change', function(e) {
		$('#lbl-dialog-download-prod').show();
		$('#text-dialog-retrieve-download-prod').prop('disabled', false);
		$('#radio-dialog-download-timeframe-prod').prop('checked', false);
		$('#radio-dialog-download-latest-prod').prop('checked', false);
		$('#radio-dialog-download-all-prod').prop('checked', false);		
		$('#dialog-download-timeframe-prod').hide();
	});
	
	$('#text-dialog-download-timeframe-prod').on('click', function(e) {
		$('#text-dialog-download-timeframe-prod').prop('value', '');
		pickmeup('#download-timeframe-prod').show();

	});
	
	$('#download-timeframe-prod').on('pickmeup-change', function(e) {
		console.log("Formatted date: " + e.detail.formatted_date);
		$('#text-dialog-download-timeframe-prod').prop('value', parseDates(e.detail.formatted_date));        
	});
	
	$('#radio-dialog-download-latest-stag').on('change', function(e) {
		$('#radio-dialog-download-all-stag').prop('checked', false);
		$('#radio-dialog-download-timeframe-stag').prop('checked', false);
		$('#radio-dialog-retrieve-download-stag').prop('checked', false);
		$('#text-dialog-retrieve-download-stag').prop('disabled', true);
		$('#lbl-dialog-download-stag').hide();
		$('#dialog-download-timeframe-stag').hide();
	});
	
	$('#radio-dialog-download-all-stag').on('change', function(e) {
		$('#radio-dialog-download-latest-stag').prop('checked', false);
		$('#radio-dialog-download-timeframe-stag').prop('checked', false);
		$('#radio-dialog-retrieve-download-stag').prop('checked', false);
		$('#text-dialog-retrieve-download-stag').prop('disabled', true);
		$('#lbl-dialog-download-stag').hide();
		$('#dialog-download-timeframe-stag').hide();
	});

	$('#radio-dialog-download-timeframe-stag').on('change', function(e) {
		$('#radio-dialog-download-latest-stag').prop('checked', false);
		$('#radio-dialog-download-all-stag').prop('checked', false);
		$('#radio-dialog-retrieve-download-stag').prop('checked', false);
		$('#text-dialog-retrieve-download-stag').prop('disabled', true);
		$('#lbl-dialog-download-stag').hide();
		$('#dialog-download-timeframe-stag').show();
	});
	
	$('#radio-dialog-retrieve-download-stag').on('change', function(e) {
		$('#lbl-dialog-download-stag').show();
		$('#text-dialog-retrieve-download-stag').prop('disabled', false);
		$('#radio-dialog-download-timeframe-stag').prop('checked', false);
		$('#radio-dialog-download-latest-stag').prop('checked', false);
		$('#radio-dialog-download-all-stag').prop('checked', false);		
		$('#dialog-download-timeframe-stag').hide();
	});
	
	$('#text-dialog-download-timeframe-stag').on('click', function(e) {
		$('#text-dialog-download-timeframe-stag').prop('value', '');
		pickmeup('#download-timeframe-stag').show();

	});
	
	$('#download-timeframe-stag').on('pickmeup-change', function(e) {
		console.log("Formatted date: " + e.detail.formatted_date);
		$('#text-dialog-download-timeframe-stag').prop('value', parseDates(e.detail.formatted_date));        
	});

	
	$('#radio-dialog-download-latest-test').on('change', function(e) {
		$('#radio-dialog-download-all-test').prop('checked', false);
		$('#radio-dialog-download-timeframe-test').prop('checked', false);
		$('#radio-dialog-retrieve-download-test').prop('checked', false);
		$('#text-dialog-retrieve-download-test').prop('disabled', true);
		$('#lbl-dialog-download-test').hide();
		$('#dialog-download-timeframe-test').hide();
	});
	
	$('#radio-dialog-download-all-test').on('change', function(e) {
		$('#radio-dialog-download-latest-test').prop('checked', false);
		$('#radio-dialog-download-timeframe-test').prop('checked', false);
		$('#radio-dialog-retrieve-download-test').prop('checked', false);
		$('#text-dialog-retrieve-download-test').prop('disabled', true);
		$('#lbl-dialog-download-test').hide();
		$('#dialog-download-timeframe-test').hide();
	});

	$('#radio-dialog-download-timeframe-test').on('change', function(e) {
		$('#radio-dialog-download-latest-test').prop('checked', false);
		$('#radio-dialog-download-all-test').prop('checked', false);
		$('#radio-dialog-retrieve-download-test').prop('checked', false);
		$('#text-dialog-retrieve-download-test').prop('disabled', true);
		$('#lbl-dialog-download-test').hide();
		$('#dialog-download-timeframe-test').show();
	});
	
	$('#radio-dialog-retrieve-download-test').on('change', function(e) {
		$('#lbl-dialog-download-test').show();
		$('#text-dialog-retrieve-download-test').prop('disabled', false);
		$('#radio-dialog-download-timeframe-test').prop('checked', false);
		$('#radio-dialog-download-latest-test').prop('checked', false);
		$('#radio-dialog-download-all-test').prop('checked', false);		
		$('#dialog-download-timeframe-test').hide();
	});
	
	$('#text-dialog-download-timeframe-test').on('click', function(e) {
		$('#text-dialog-download-timeframe-test').prop('value', '');
		pickmeup('#download-timeframe-test').show();

	});
	
	$('#download-timeframe-test').on('pickmeup-change', function(e) {
		console.log("Formatted date: " + e.detail.formatted_date);
		$('#text-dialog-download-timeframe-test').prop('value', parseDates(e.detail.formatted_date));        
	});

	/*
	 * Seach dialog components
	 */
	
	// Prod search dialog component: time frame checked or unchecked
	$('#radio-dialog-search-timeframe-prod').on('change', function(e) {
		
		if ($('#radio-dialog-search-timeframe-prod').prop('checked')) {
			$('#radio-dialog-retrieve-search-prod').prop('checked', false);
			$('#dialog-search-timeframe-prod').show();
		} else {
			$('#dialog-search-timeframe-prod').hide();
		}
		$('#lbl-dialog-retrieve-search-logs-prod').hide();
		$('#txt-dialog-retrieve-search-prod').prop('disabled', true);
		$('#txt-dialog-retrieve-search-prod').hide();
		$('#lbl-dialog-search-string-prod').show();
		$('#txt-dialog-search-string-prod').show();			
	});

	// Prod search dialog component: download key checked or unchecked
	$('#radio-dialog-retrieve-search-prod').on('change', function(e) {
		
		if ($('#radio-dialog-retrieve-search-prod').prop('checked')) {
			$('#radio-dialog-search-timeframe-prod').prop('checked', false);
			$('#dialog-search-timeframe-prod').hide();
			$('#lbl-dialog-search-string-prod').hide();
			$('#txt-dialog-search-string-prod').hide();			
			$('#lbl-dialog-retrieve-search-logs-prod').show();
			$('#txt-dialog-retrieve-search-prod').show();
			$('#txt-dialog-retrieve-search-prod').prop('disabled', false);
		} else {
			$('#lbl-dialog-search-string-prod').show();
			$('#txt-dialog-search-string-prod').show();			
			$('#lbl-dialog-retrieve-search-logs-prod').hide();
			$('#txt-dialog-retrieve-search-prod').hide();
			$('#txt-dialog-retrieve-search-prod').prop('disabled', true);
		}
	});
	
	// Prod search dialog component: search string text box
	$('#txt-dialog-search-string-prod').on('click', function(e) {
		$('#txt-dialog-search-string-prod').prop('value', '');
	});

	// Prod search dialog component: search time frame text box
	$('#txt-dialog-search-timeframe-prod').on('click', function(e) {
		$('#txt-dialog-search-timeframe-prod').prop('value', '');
		pickmeup('#search-timeframe-prod').show();

	});
	
	// Prod search dialog component: search time frame calendar
	$('#search-timeframe-prod').on('pickmeup-change', function(e) {
		console.log("Formatted date: " + e.detail.formatted_date);
		$('#txt-dialog-search-timeframe-prod').prop('value', parseDates(e.detail.formatted_date));        
	});
	
	// Stag search dialog component: time frame checked or unchecked
	$('#radio-dialog-search-timeframe-stag').on('change', function(e) {
		
		if ($('#radio-dialog-search-timeframe-stag').prop('checked')) {
			$('#radio-dialog-retrieve-search-stag').prop('checked', false);
			$('#dialog-search-timeframe-stag').show();
		} else {
			$('#dialog-search-timeframe-stag').hide();
		}
		$('#lbl-dialog-retrieve-search-logs-stag').hide();
		$('#txt-dialog-retrieve-search-stag').prop('disabled', true);
		$('#txt-dialog-retrieve-search-stag').hide();
		$('#lbl-dialog-search-string-stag').show();
		$('#txt-dialog-search-string-stag').show();			
	});

	// stag search dialog component: download key checked or unchecked
	$('#radio-dialog-retrieve-search-stag').on('change', function(e) {
		
		if ($('#radio-dialog-retrieve-search-stag').prop('checked')) {
			$('#radio-dialog-search-timeframe-stag').prop('checked', false);
			$('#dialog-search-timeframe-stag').hide();
			$('#lbl-dialog-search-string-stag').hide();
			$('#txt-dialog-search-string-stag').hide();			
			$('#lbl-dialog-retrieve-search-logs-stag').show();
			$('#txt-dialog-retrieve-search-stag').show();
			$('#txt-dialog-retrieve-search-stag').prop('disabled', false);
		} else {
			$('#lbl-dialog-search-string-stag').show();
			$('#txt-dialog-search-string-stag').show();			
			$('#lbl-dialog-retrieve-search-logs-stag').hide();
			$('#txt-dialog-retrieve-search-stag').hide();
			$('#txt-dialog-retrieve-search-stag').prop('disabled', true);
		}
	});
	
	// stag search dialog component: search string text box
	$('#txt-dialog-search-string-stag').on('click', function(e) {
		$('#txt-dialog-search-string-stag').prop('value', '');
	});

	// stag search dialog component: search time frame text box
	$('#txt-dialog-search-timeframe-stag').on('click', function(e) {
		$('#txt-dialog-search-timeframe-stag').prop('value', '');
		pickmeup('#search-timeframe-stag').show();

	});
	
	// stag search dialog component: search time frame calendar
	$('#search-timeframe-stag').on('pickmeup-change', function(e) {
		console.log("Formatted date: " + e.detail.formatted_date);
		$('#txt-dialog-search-timeframe-stag').prop('value', parseDates(e.detail.formatted_date));        
	});
	
	// test search dialog component: time frame checked or unchecked
	$('#radio-dialog-search-timeframe-test').on('change', function(e) {
		
		if ($('#radio-dialog-search-timeframe-test').prop('checked')) {
			$('#radio-dialog-retrieve-search-test').prop('checked', false);
			$('#dialog-search-timeframe-test').show();
		} else {
			$('#dialog-search-timeframe-test').hide();
		}
		$('#lbl-dialog-retrieve-search-logs-test').hide();
		$('#txt-dialog-retrieve-search-test').prop('disabled', true);
		$('#txt-dialog-retrieve-search-test').hide();
		$('#lbl-dialog-search-string-test').show();
		$('#txt-dialog-search-string-test').show();			
	});

	// test search dialog component: download key checked or unchecked
	$('#radio-dialog-retrieve-search-test').on('change', function(e) {
		
		if ($('#radio-dialog-retrieve-search-test').prop('checked')) {
			$('#radio-dialog-search-timeframe-test').prop('checked', false);
			$('#dialog-search-timeframe-test').hide();
			$('#lbl-dialog-search-string-test').hide();
			$('#txt-dialog-search-string-test').hide();			
			$('#lbl-dialog-retrieve-search-logs-test').show();
			$('#txt-dialog-retrieve-search-test').show();
			$('#txt-dialog-retrieve-search-test').prop('disabled', false);
		} else {
			$('#lbl-dialog-search-string-test').show();
			$('#txt-dialog-search-string-test').show();			
			$('#lbl-dialog-retrieve-search-logs-test').hide();
			$('#txt-dialog-retrieve-search-test').hide();
			$('#txt-dialog-retrieve-search-test').prop('disabled', true);
		}
	});
	
	// test search dialog component: search string text box
	$('#txt-dialog-search-string-test').on('click', function(e) {
		$('#txt-dialog-search-string-test').prop('value', '');
	});

	// test search dialog component: search time frame text box
	$('#txt-dialog-search-timeframe-test').on('click', function(e) {
		$('#txt-dialog-search-timeframe-test').prop('value', '');
		pickmeup('#search-timeframe-test').show();

	});
	
	// test search dialog component: search time frame calendar
	$('#search-timeframe-test').on('pickmeup-change', function(e) {
		console.log("Formatted date: " + e.detail.formatted_date);
		$('#txt-dialog-search-timeframe-test').prop('value', parseDates(e.detail.formatted_date));        
	});


	/*
	 * Dialog boxes
	 */
	
	// Prod dialog box: download
	$('#dialog-download-prod').dialog({
		autoOpen: false,
		resizable: false,
		width: 400,
		height: 500,
		buttons: {
			"OK": function() {
				console.log($('#radio-dialog-retrieve-download-prod').is(":checked"));
				if ($('#radio-dialog-retrieve-download-prod').is(":checked")) {
					dKey = $('#text-dialog-retrieve-download-prod').val();
					retrieveLogs("Prod", $('#text-dialog-retrieve-download-prod').val());
					$(this).dialog("close");				
					$('#dialog-please-wait').dialog("open");
				} else {
					count = gatherAllLogsToFetch("Prod");
					console.log("Count of logs requested are: " + count);
					if (isNaN(count) || count <= 0) {
						$(this).dialog("close");				
						$('#dialog-invalid-selection').dialog("open");
					} else {
						option = determineDownloadOption("Prod");
						if (option === "timeframe") {
							dtRange = $('#text-dialog-download-timeframe-prod').val();
							console.log("Date range is: " + dtRange)
							getLogs("Prod", option, dtRange);
						} else {
							getLogs("Prod", option, null);
						} // end if count
						$(this).dialog("close");				
						$('#dialog-please-wait').dialog("open");				
					}
				}
			},
			"Cancel": function() {
				$(this).dialog("close");
			}
		}
	});
	
	// Stag dialog box: download
	$('#dialog-download-stag').dialog({
		autoOpen: false,
		resizable: false,
		width: 400,
		height: 500,
		buttons: {
			"OK": function() {
				console.log($('#radio-dialog-retrieve-download-stag').is(":checked"));
				if ($('#radio-dialog-retrieve-download-stag').is(":checked")) {
					dKey = $('#text-dialog-retrieve-download-stag').val();
					retrieveLogs("Staging", $('#text-dialog-retrieve-download-stag').val());
					$(this).dialog("close");				
					$('#dialog-please-wait').dialog("open");				
				} else {
					count = gatherAllLogsToFetch("Staging");
					console.log("Count of logs requested are: " + count);
					if (isNaN(count) || count <= 0) {
						$(this).dialog("close");				
						$('#dialog-invalid-selection').dialog("open");
					} else {
						option = determineDownloadOption("Staging");
						if (option === "timeframe") {
							dtRange = $('#text-dialog-download-timeframe-stag').val();
							console.log("Date range is: " + dtRange)
							getLogs("Staging", option, dtRange);
						} else {
							getLogs("Staging", option, null);
						} // end if count
						$(this).dialog("close");				
						$('#dialog-please-wait').dialog("open");				
					}
				}
			},
			"Cancel": function() {
				$(this).dialog("close");
			}
		}
	});
	
	// Test dialog box: download	
	$('#dialog-download-test').dialog({
		autoOpen: false,
		resizable: false,
		width: 400,
		height: 500,
		buttons: {
			"OK": function() {
				if ($('#radio-dialog-retrieve-download-test').is(":checked")) {
					dKey = $('#text-dialog-retrieve-download-test').val();
					retrieveLogs("Prod", $('#text-dialog-retrieve-download-test').val());
					$(this).dialog("close");				
					$('#dialog-please-wait').dialog("open");				
				} else {
					count = gatherAllLogsToFetch("Test");
					console.log("Count of logs requested are: " + count);
					if (isNaN(count) || count <= 0) {
						$(this).dialog("close");				
						$('#dialog-invalid-selection').dialog("open");
					} else {
						option = determineDownloadOption("Test");
						if (option === "timeframe") {
							dtRange = $('#text-dialog-download-timeframe-test').val();
							console.log("Date range is: " + dtRange)
							getLogs("Test", option, dtRange);
						} else {
							getLogs("Test", option, null);
						} // end if count
						$(this).dialog("close");				
						$('#dialog-please-wait').dialog("open");				
					}
				}
			},
			"Cancel": function() {
				$(this).dialog("close");
			}
		}
	});

	// Prod dialog box: search
	$('#dialog-search-prod').dialog({
		autoOpen: false,
		resizable: false,
		width: 400,
		height: 500,
		buttons: {
			"OK": function() {
				if ($('#radio-dialog-retrieve-search-prod').is(":checked")) {
					dKey = $('#txt-dialog-retrieve-search-prod').val();
					console.log("Download key: " + dKey);
					retrieveLogs("Prod", $('#txt-dialog-retrieve-search-prod').val());
					$(this).dialog("close");				
					$('#dialog-please-wait').dialog("open");				
				} else {
					count = gatherAllLogsToFetch("Prod");
					console.log("Count of logs requested are: " + count);
					if (isNaN(count) || count <= 0) {
						$(this).dialog("close");				
						$('#dialog-invalid-selection').dialog("open");
					} else {
						searchString = $('#txt-dialog-search-string-prod').val();
						console.log("Search string : \"" + searchString + "\"");
						dtRange = $('#txt-dialog-search-timeframe-prod').val();
						console.log("Date range is: " + dtRange)
						if (dtRange === "Select dates below or input as YYYYMMDD-YYYYMMDD") {
							displayMessage("Please wait for your download key.","Also, please note that all of today's logs are searched.");
							searchLogs("Prod", null, searchString);
						} else {	
							searchLogs("Prod", dtRange, searchString);
							$('#dialog-please-wait').dialog("open");				
						} // end if count
						$(this).dialog("close");				
					}
				}			},
			"Cancel": function() {
				$(this).dialog("close");
			}
		}
	});

	// Stag dialog box: search
	$('#dialog-search-stag').dialog({
		autoOpen: false,
		resizable: false,
		width: 800,
		height: 500,
		buttons: {
			"OK": function() {
				if ($('#radio-dialog-retrieve-search-stag').is(":checked")) {
					dKey = $('#txt-dialog-retrieve-search-stag').val();
					console.log("Download key: " + dKey);
					retrieveLogs("Staging", $('#txt-dialog-retrieve-search-stag').val());
					$(this).dialog("close");				
					$('#dialog-please-wait').dialog("open");				
				} else {
					count = gatherAllLogsToFetch("Staging");
					console.log("Count of logs requested are: " + count);
					if (isNaN(count) || count <= 0) {
						$(this).dialog("close");				
						$('#dialog-invalid-selection').dialog("open");
					} else {
						searchString = $('#txt-dialog-search-string-stag').val();
						console.log("Search string : \"" + searchString + "\"");
						dtRange = $('#txt-dialog-search-timeframe-stag').val();
						console.log("Date range is: " + dtRange)
						if (dtRange === "Select dates below or input as YYYYMMDD-YYYYMMDD") {
							displayMessage("Please wait for your download key.","Also, please note that all of today's logs are searched.");
							searchLogs("Staging", null, searchString);
						} else {	
							searchLogs("Staging", dtRange, searchString);
							$('#dialog-please-wait').dialog("open");				
						} // end if count
						$(this).dialog("close");				
					}
				}				
			},
			"Cancel": function() {
				$(this).dialog("close");
			}
		}
	});
	
	
	// Test dialog box: search
	$('#dialog-search-test').dialog({
		autoOpen: false,
		resizable: false,
		width: 600,
		height: 500,
		buttons: {
			"OK": function() {
				if ($('#radio-dialog-retrieve-search-test').is(":checked")) {
					dKey = $('#txt-dialog-retrieve-search-test').val();
					console.log("Download key: " + dKey);
					retrieveLogs("Test", $('#txt-dialog-retrieve-search-test').val());
					$(this).dialog("close");				
					$('#dialog-please-wait').dialog("open");				
				} else {
					count = gatherAllLogsToFetch("Test");
					console.log("Count of logs requested are: " + count);
					if (isNaN(count) || count <= 0) {
						$(this).dialog("close");				
						$('#dialog-invalid-selection').dialog("open");
					} else {
						searchString = $('#txt-dialog-search-string-test').val();
						console.log("Search string : \"" + searchString + "\"");
						dtRange = $('#txt-dialog-search-timeframe-test').val();
						console.log("Date range is: " + dtRange)
						if (dtRange === "Select dates below or input as YYYYMMDD-YYYYMMDD") {
							displayMessage("Please wait for your download key.","Also, please note that all of today's logs are searched.");
							searchLogs("Test", null, searchString);
						} else {	
							searchLogs("Test", dtRange, searchString);
							$('#dialog-please-wait').dialog("open");				
						} // end if count
						$(this).dialog("close");				
					}
				}				
			},
			"Cancel": function() {
				$(this).dialog("close");
			}
		}
	});
	
});

function initControls() {
	
	
	$('#accordion-logs-server').accordion({animate: true});
	initSelections("prod");
	if (PROD_LOGS_ALL_SELECTED == true) {
		$('#btn-selectall-prod').text('Unselect All');
	} else {
		$('#btn-selectall-prod').text('Select All');
	}
	PROD_ACCODION_INITIALIZED = true;

	
	$('#dialog-invalid-selection').dialog({
		autoOpen: false,
		modal: true,
		buttons: {
			"OK": function() {
				$(this).dialog("close");
			}
		}

	});
	
	
	$('#dialog-please-wait').dialog({
		autoOpen: false,
		modal: true
//		,
//		buttons: {
//			"Cancel": function() {
//				$(this).dialog("close");
//			}
//		}
	});

	$('#dialog-result').dialog({
		autoOpen: false,
		modal: true,
		buttons: {
//			"Copy to Clipboard": function() {
//				$(this).dialog("close");
//			},
			"OK": function() {
				$(this).dialog("close");
			}
		}
	});

	
	$('#radio-dialog-download-latest-prod').prop('checked', true);
	$('#lbl-dialog-download-prod').hide();

	$('#radio-dialog-download-latest-stag').prop('checked', true);
	$('#lbl-dialog-download-stag').hide();

	$('#radio-dialog-download-latest-test').prop('checked', true);
	$('#lbl-dialog-download-test').hide();
	
	$('.dialog-download-timeframe').hide();

	$('#radio-dialog-search-latest-prod').prop('checked', false);
	$('#lbl-dialog-search-prod').hide();
	$('#lbl-dialog-retrieve-search-logs-prod').hide();

	$('#radio-dialog-search-latest-stag').prop('checked', false);
	$('#lbl-dialog-search-stag').hide();
	$('#lbl-dialog-retrieve-search-logs-stag').hide();

	$('#radio-dialog-search-latest-test').prop('checked', false);
	$('#lbl-dialog-search-test').hide();
	$('#lbl-dialog-retrieve-search-logs-test').hide();

	$('.dialog-search-timeframe').hide();
	
	$('#span-help-download-timeframe-prod').hover(function() {
		showHelpDialog(directive_download_timeframe);
	});

	$('#span-help-search-timeframe-prod').hover(function() {
		showHelpDialog(directive_search_timeframe);
	});
	
	$('#span-help-download-timeframe-stag').hover(function() {
		showHelpDialog(directive_download_timeframe);
	});

	$('#span-help-search-timeframe-stag').hover(function() {
		showHelpDialog(directive_search_timeframe);
	});
	
	$('#span-help-download-timeframe-test').hover(function() {
		showHelpDialog(directive_download_timeframe);
	});

	$('#span-help-search-timeframe-test').hover(function() {
		showHelpDialog(directive_search_timeframe);
	});


	pickmeup('#download-timeframe-prod', {
		format  : 'Ymd',
		flat : true,
		mode : 'range'
	});
	
	pickmeup('#download-timeframe-stag', {
		format  : 'Ymd',
		flat : true,
		mode : 'range'
	});

	pickmeup('#download-timeframe-test', {
		format  : 'Ymd',
		flat : true,
		mode : 'range'
	});
	
	
	pickmeup('#search-timeframe-prod', {
		format  : 'Ymd',
		flat : true,
		mode : 'range'
	});
	
	pickmeup('#search-timeframe-stag', {
		format  : 'Ymd',
		flat : true,
		mode : 'range'
	});

	pickmeup('#search-timeframe-test', {
		format  : 'Ymd',
		flat : true,
		mode : 'range'
	});
	

}

function determineDownloadOption(env) {
	
	var option = "latest";

	if (env.toLowerCase() == "Staging".toLowerCase()) {
		if ($('#radio-dialog-download-latest-stag').is(':checked')) option = "latest";
		else if ($('#radio-dialog-download-all-stag').is(':checked')) option = "all";
		else if ($('#radio-dialog-download-timeframe-stag').is(':checked')) option = "timeframe";
	} else if (env.toLowerCase() == "Test".toLowerCase() || env.toLowerCase() == "Dev".toLowerCase()) {
		if ($('#radio-dialog-download-latest-test').is(':checked')) option = "latest";
		else if ($('#radio-dialog-download-all-test').is(':checked')) option = "all";
		else if ($('#radio-dialog-download-timeframe-test').is(':checked')) option = "timeframe";
	} else 	if (env.toLowerCase() == "Prod".toLowerCase()) {
		if ($('#radio-dialog-download-latest-prod').is(':checked')) option = "latest";
		else if ($('#radio-dialog-download-all-prod').is(':checked')) option = "all";
		else if ($('#radio-dialog-download-timeframe-prod').is(':checked')) option = "timeframe";
	}
	
	return option;
}



function checkIfAllUnselected(env) {

	var count = 0;

	if (env.toLowerCase() == "Staging".toLowerCase()) {
		for (var i = 0; i < STAG_HOSTS_WEBSEALS.length; i++) {
			  count += $('#jstree-div-stag-host-' + (i+1)).jstree().get_selected(false).length;
//			  console.log("Count is " + count);
		} // end for
		if (count == 0) {
			$('#btn-selectall-stag').text('Select All');
			STAG_LOGS_ALL_SELECTED = false;
		}
	} else if (env.toLowerCase() == "Test".toLowerCase() || env.toLowerCase() == "Dev".toLowerCase()) {
		for (var i = 0; i < TEST_HOSTS_WEBSEALS.length; i++) {
			  count += $('#jstree-div-test-host-' + (i+1)).jstree().get_selected(false).length;
//			  console.log("Count is " + count);
		} // end for
		if (count == 0) {
			$('#btn-selectall-test').text('Select All');
			TEST_LOGS_ALL_SELECTED = false;
		}
	} else if (env.toLowerCase() == "Prod".toLowerCase()) {
		for (var i = 0; i < PROD_HOSTS_WEBSEAL.length; i++) {
			for (var j = 0; j < rpElements.length; j++) {			
				count += $('#jstree-div-prod-' + rpElements[j].shortText + '-host-' + (i+1)).jstree().get_selected(false).length;
//				  count += $('#jstree-div-prod-host-' + (i+1)).jstree().get_selected(false).length;
				  console.log("Count is " + count);
			} // end for with j
			for (var j = 0; j < isamElements.length; j++) {			
				count += $('#jstree-div-prod-' + isamElements[j].shortText + '-host-' + (i+1)).jstree().get_selected(false).length;
//				  count += $('#jstree-div-prod-host-' + (i+1)).jstree().get_selected(false).length;
				  console.log("Count is " + count);
			} // end for with j
			for (var j = 0; j < isamFedElements.length; j++) {			
				count += $('#jstree-div-prod-' + isamFedElements[j].shortText + '-host-' + (i+1)).jstree().get_selected(false).length;
//				  count += $('#jstree-div-prod-host-' + (i+1)).jstree().get_selected(false).length;
				  console.log("Count is " + count);
			} // end for with j
			for (var j = 0; j < tfimElements.length; j++) {			
				count += $('#jstree-div-prod-' + tfimElements[j].shortText + '-host-' + (i+1)).jstree().get_selected(false).length;
//				  count += $('#jstree-div-prod-host-' + (i+1)).jstree().get_selected(false).length;
				  console.log("Count is " + count);
			} // end for with j
		} // end for
		if (count == 0) {
			$('#btn-selectall-prod').text('Select All');
			PROD_LOGS_ALL_SELECTED = false;
		}
	} // end if
}

//function updateSelections(env, selected) {
//	console.log("Updating logs selection for " + env.toLowerCase() + "...");
//	
//	if (env.toLowerCase() == "Staging".toLowerCase()) {
//		if (selected == false) {
////			STAG_LOGS_ALL_SELECTED = true;
//			for (var i = 0; i < STAG_HOSTS_WEBSEALS.length; i++) {
//				  $('#jstree-div-stag-host-' + (i+1)).jstree(selected).deselect_all(false);
//			} // end for
//			$('#btn-selectall-stag').text('Select All');
//		} else {
////			STAG_LOGS_ALL_SELECTED = false;
//			for (var i = 0; i < STAG_HOSTS_WEBSEALS.length; i++) {
//				  $('#jstree-div-stag-host-' + (i+1)).jstree(selected).select_all(false);
//			} // end for
//			$('#btn-selectall-stag').text('Unselect All');
//		}
//		
//	} else if (env.toLowerCase() == "Test".toLowerCase() || env.toLowerCase() == "Dev".toLowerCase()) {
//		if (selected == false) {
////			TEST_LOGS_ALL_SELECTED = true;
//			for (var i = 0; i < TEST_HOSTS_WEBSEALS.length; i++) {
//				  $('#jstree-div-test-host-' + (i+1)).jstree(selected).deselect_all(false);
//			}
//			$('#btn-selectall-test').text('Select All');
//		} else {
////			TEST_LOGS_ALL_SELECTED = false;
//			for (var i = 0; i < TEST_HOSTS_WEBSEALS.length; i++) {
//				  $('#jstree-div-test-host-' + (i+1)).jstree(selected).select_all(false);
//			}
//			$('#btn-selectall-test').text('Unselect All');
//		}
//		
//	} else if (env.toLowerCase() == "Prod".toLowerCase()) {
//		if (PROD_LOGS_ALL_SELECTED == false) {
////			PROD_LOGS_ALL_SELECTED = true;
//			for (var i = 0; i < PROD_HOSTS_WEBSEALS.length; i++) {
//				  $('#jstree-div-prod-host-' + (i+1)).jstree(PROD_LOGS_ALL_SELECTED).deselect_all(false);
//			}
//			$('#btn-selectall-prod').text('Select All');
//		} else {
//			PROD_LOGS_ALL_SELECTED = false;
//			for (var i = 0; i < PROD_HOSTS_WEBSEALS.length; i++) {
//				  $('#jstree-div-prod-host-' + (i+1)).jstree(PROD_LOGS_ALL_SELECTED).select_all(false);
//			}
//			$('#btn-selectall-prod').text('Unselect All');
//		}
//	} // end if
//	
//} // end function 


function initSelections(env) {
	console.log("Initializing logs selection for " + env.toLowerCase() + "...");
	
	if (env.toLowerCase() == "Staging".toLowerCase()) {
//		STAG_LOGS_ALL_SELECTED = true;
//		for (var i = 0; i < STAG_HOSTS_WEBSEALS.length; i++) {
//			for (var j = 0; j < rpNodeElements.length; j++) {
//				$('#jstree-div-stag-host-' + rpNodeElements[j].serverType + '-' + (i+1)).jstree(
//						{'plugins':["wholerow","checkbox"], 'core' : {
//							'data' : getJsTreeCheckboxes("Staging", i)
//						}});
//			} // end for with j
//			for (var j = 0; j < isamElements.length; j++) {
//				$('#jstree-div-stag-host-' + isamElements[j].serverType + '-' + (i+1)).jstree(
//						{'plugins':["wholerow","checkbox"], 'core' : {
//							'data' : getJsTreeCheckboxes("Staging", i)
//						}});
//			} // end for with j
//			for (var j = 0; j < isamFedElements.length; j++) {
//				$('#jstree-div-stag-host-' + isamFedElements[j].serverType + '-' + (i+1)).jstree(
//						{'plugins':["wholerow","checkbox"], 'core' : {
//							'data' : getJsTreeCheckboxes("Staging", i)
//						}});
//			} // end for with j
//			for (var j = 0; j < tfimElements.length; j++) {
//				$('#jstree-div-stag-host-' + tfimElements[j].serverType + '-' + (i+1)).jstree(
//						{'plugins':["wholerow","checkbox"], 'core' : {
//							'data' : getJsTreeCheckboxes("Staging", i)
//						}});
//			} // end for with j
//		} // end for with i

		for (var i = 0; i < STAG_HOSTS_WEBSEAL.length; i++) {
			var elements = rpElements;
			for (var j = 0; j < rpElements.length; j++) {
				console.log("Building " + '#jstree-div-prod-rp-host-' + (i+1) + " js tree");
				$('#jstree-div-stag-' + rpElements[j].serverType + '-host-' + (i+1)).jstree( 
						{'plugins':["wholerow","checkbox"], 'core' : {
							'data' : getJsTreeCheckboxes(rpElements, "Stag", (i+1), false)
				}});
			} // end for with j
		} // end for with i
		for (var i = 0; i < STAG_HOSTS_ISAM.length; i++) {
			for (var j = 0; j < isamElements.length; j++) {
				console.log("Building " + '#jstree-div-prod-' + isamElements[j].serverType + '-host-' + (i+1) + " js tree");
				$('#jstree-div-stag-' + isamElements[j].serverType + '-host-' + (i+1)).jstree(
						{'plugins':["wholerow","checkbox"], 'core' : {
							'data' : getJsTreeCheckboxes(isamElements, "Stag", (i+1), false)
				}});
			} // end for with j
		} // end for with i			
		for (var i = 0; i < STAG_HOSTS_ISAM_FED.length; i++) {
			for (var j = 0; j < isamFedElements.length; j++) {
				console.log("Building " + '#jstree-div-prod-' + isamFedElements[j].serverType + '-host-' + (i+1) + " js tree");
				$('#jstree-div-stag-' + isamFedElements[j].serverType + '-host-' + (i+1)).jstree(
						{'plugins':["wholerow","checkbox"], 'core' : {
							'data' : getJsTreeCheckboxes(isamFedElements, "Stag", (i+1), true)
				}});
			} // end for with j
		} // end for with i			
		for (var i = 0; i < STAG_HOSTS_TFIM.length; i++) {
			for (var j = 0; j < tfimElements.length; j++) {
				console.log("Building " + '#jstree-div-prod-' + tfimElements[j].serverType + '-host-' + (i+1) + " js tree");
				$('#jstree-div-stag-' + tfimElements[j].serverType + '-host-' + (i+1)).jstree(
						{'plugins':["wholerow","checkbox"], 'core' : {
							'data' : getJsTreeCheckboxes(tfimElements, "Stag", (i+1), true)
				}});
			} // end for with j		
		} // end for with i			

	
	} else if (env.toLowerCase() == "Test".toLowerCase() || env.toLowerCase() == "Dev".toLowerCase()) {
//		TEST_LOGS_ALL_SELECTED = true;
//		for (var i = 0; i < TEST_HOSTS_WEBSEALS.length; i++) {
//			  $('#jstree-div-test-host-' + type + '-' + (i+1)).jstree(
//					  {'plugins':["wholerow","checkbox"], 'core' : {
//						  'data' : getJsTreeCheckboxes("Test", i)
//						  }
//					  });
//			} // end for

		for (var i = 0; i < TEST_HOSTS_WEBSEAL.length; i++) {
			var elements = rpElements;
			for (var j = 0; j < rpElements.length; j++) {
				console.log("Building " + '#jstree-div-prod-rp-host-' + (i+1) + " js tree");
				$('#jstree-div-test-' + rpElements[j].serverType + '-host-' + (i+1)).jstree(
						{'plugins':["wholerow","checkbox"], 'core' : {
							'data' : getJsTreeCheckboxes(rpElements, "Test", (i+1), false)
				}});
			} // end for with j
		} // end for with i
		for (var i = 0; i < TEST_HOSTS_ISAM.length; i++) {
			for (var j = 0; j < isamElements.length; j++) {
				console.log("Building " + '#jstree-div-prod-' + isamElements[j].serverType + '-host-' + (i+1) + " js tree");
				$('#jstree-div-test-' + isamElements[j].serverType + '-host-' + (i+1)).jstree(
						{'plugins':["wholerow","checkbox"], 'core' : {
							'data' : getJsTreeCheckboxes(isamElements, "Test", (i+1), false)
				}});
			} // end for with j
		} // end for with i			
		for (var i = 0; i < TEST_HOSTS_ISAM_FED.length; i++) {
			for (var j = 0; j < isamFedElements.length; j++) {
				console.log("Building " + '#jstree-div-prod-' + isamFedElements[j].serverType + '-host-' + (i+1) + " js tree");
				$('#jstree-div-test-' + isamFedElements[j].serverType + '-host-' + (i+1)).jstree(
						{'plugins':["wholerow","checkbox"], 'core' : {
							'data' : getJsTreeCheckboxes(isamFedElements, "Test", (i+1), true)
				}});
			} // end for with j
		} // end for with i			
		for (var i = 0; i < TEST_HOSTS_TFIM.length; i++) {
			for (var j = 0; j < tfimElements.length; j++) {
				console.log("Building " + '#jstree-div-prod-' + tfimElements[j].serverType + '-host-' + (i+1) + " js tree");
				$('#jstree-div-test-' + tfimElements[j].serverType + '-host-' + (i+1)).jstree(
						{'plugins':["wholerow","checkbox"], 'core' : {
							'data' : getJsTreeCheckboxes(tfimElements, "Test", (i+1), true)
				}});
			} // end for with j		
		} // end for with i			
		
	} else if (env.toLowerCase() == "Prod".toLowerCase()) {
		
//		PROD_LOGS_ALL_SELECTED = true;
		for (var i = 0; i < PROD_HOSTS_WEBSEAL.length; i++) {
			var elements = rpElements;
			for (var j = 0; j < rpElements.length; j++) {
				console.log("Building " + '#jstree-div-prod-rp-host-' + (i+1) + " js tree");
				$('#jstree-div-prod-' + rpElements[j].serverType + '-host-' + (i+1)).jstree(
						{'plugins':["wholerow","checkbox"], 'core' : {
							'data' : getJsTreeCheckboxes(rpElements, "Prod", (i+1), false)
				}});
			} // end for with j
		} // end for with i
		for (var i = 0; i < PROD_HOSTS_ISAM.length; i++) {
			for (var j = 0; j < isamElements.length; j++) {
				console.log("Building " + '#jstree-div-prod-' + isamElements[j].serverType + '-host-' + (i+1) + " js tree");
				$('#jstree-div-prod-' + isamElements[j].serverType + '-host-' + (i+1)).jstree(
						{'plugins':["wholerow","checkbox"], 'core' : {
							'data' : getJsTreeCheckboxes(isamElements, "Prod", (i+1), false)
				}});
			} // end for with j
		} // end for with i			
		for (var i = 0; i < PROD_HOSTS_ISAM_FED.length; i++) {
			for (var j = 0; j < isamFedElements.length; j++) {
				console.log("Building " + '#jstree-div-prod-' + isamFedElements[j].serverType + '-host-' + (i+1) + " js tree");
				$('#jstree-div-prod-' + isamFedElements[j].serverType + '-host-' + (i+1)).jstree(
						{'plugins':["wholerow","checkbox"], 'core' : {
							'data' : getJsTreeCheckboxes(isamFedElements, "Prod", (i+1), true)
				}});
			} // end for with j
		} // end for with i			
		for (var i = 0; i < PROD_HOSTS_TFIM.length; i++) {
			for (var j = 0; j < tfimElements.length; j++) {
				console.log("Building " + '#jstree-div-prod-' + tfimElements[j].serverType + '-host-' + (i+1) + " js tree");
				$('#jstree-div-prod-' + tfimElements[j].serverType + '-host-' + (i+1)).jstree(
						{'plugins':["wholerow","checkbox"], 'core' : {
							'data' : getJsTreeCheckboxes(tfimElements, "Prod", (i+1), true)
				}});
			} // end for with j		
		} // end for with i			
	} // end if

	
}


function getLogsListing(env) {
	console.log("Fetching logs listing from " + env.toLowerCase() + "...");
	if (env.toLowerCase() == "Staging".toLowerCase()) {
//		for (i = 0; i < STAG_HOSTS_WEBSEALS.length; i++) {
			console.log("Calling " + STAG_HOST + "/w3id-svc/getListingWebSealLogs?env=" + env.toLowerCase());
			$.ajax({
				  dataType: "json",
				  url: STAG_HOST + "/w3id-svc/getListingWebSealLogs?env=" + env,
				  type: "get",
				  async: false,
				  success: function(data){
			          for (var key in data) {
			        	  if (data.hasOwnProperty(key)) {
			        		  var isamhost = data[key].Host;
				        	  console.log("HOST in " + env + ": " + isamhost);
				        	  if (isamhost.includes("01")) {
					        	  var host1_logFiles = data[key].Logs.sort();
//					        	  host1_logFiles = host1_logFiles.sort();
					        	  for (var key2 in host1_logFiles) {
					        		  if (host1_logFiles.hasOwnProperty(key2)) {
					        			  if (host1_logFiles[key2].id.includes("request")) {
					        				  console.log("Log Files: " + host1_logFiles[key2].id);
					        				  requestLogs.push(host1_logFiles[key2].id);
					        			  } else if (host1_logFiles[key2].id.includes("msg")) {
					        				  console.log("Log Files: " + host1_logFiles[key2].id);
					        				  webSealLogs.push(host1_logFiles[key2].id);
					        			  } // end if
				        			  } else if (host1_logFiles[key2].id.includes("trace")) {
				        				  console.log("Log Files: " + host1_logFiles[key2].id);
				        				  traceLogs.push(host1_logFiles[key2].id);
					        		  } // end if
					        	  } // end for key2
					  		  	pushChangesToUI(requestLogs, env, "host1");
				        	  } // end if re: host 01
				          } // end if-else-if
			          } // end for key
				  } // end success	
				}); // end $.ajax
		

			
//		$.getJSON("https://dal9-ppd-cfmicio2-01.sec.ibm.com:19443/w3id-svc/checkPendingJobs?env=" + env, function(data){
//	          for (var i in data) {
//		          if (data[i].AuthType.toLowerCase() == "oidc") {
//		        	  OIDC_STAGING = data[i].JobStatus.toLowerCase();
//		        	  console.log("OIDC in " + env + ": " + OIDC_STAGING);
//		          } else if (data[i].AuthType.toLowerCase() == "saml2") {
//			        	SAML_STAGING = data[i].JobStatus.toLowerCase();
//			        	console.log("SAML in " + env + ": " + SAML_STAGING);
//		          } // end if-else-if
//	          } // end for		
//		}); // end $.getJSON
//		} // end for loop
	} else if (env.toLowerCase() == "Dev".toLowerCase() || env.toLowerCase() == "Test".toLowerCase()) {
		console.log("Calling " + TEST_HOST + "/w3id-svc/getListingWebSealLogs?env=" + env.toLowerCase());

//		$.ajax({
//			  dataType: "json",
//			  url: DEV_HOST + "/w3id-svc/checkPendingJobs?env=" + env,
//			  type: "get",
//			  async: false,
//			  success: function(data){
//		          for (var i in data) {
//			          if (data[i].AuthType.toLowerCase() == "oidc") {
//			        	  OIDC_DEV = data[i].JobStatus.toLowerCase();
//			        	  console.log("OIDC in " + env + ": " + OIDC_DEV);
//			          } else if (data[i].AuthType.toLowerCase() == "saml2") {
//			        	  SAML_DEV = data[i].JobStatus.toLowerCase();
//			        	  console.log("SAML in " + env + ": " + SAML_DEV);
//			          } // end if-else-if
//		          } // end for		
//			}
//			}); // end $.ajax
		
//		$.getJSON("https://dal9-ppd-cfmicio2-01.sec.ibm.com:19443/w3id-svc/checkPendingJobs?env=" + env, function(data){
//	          for (var i in data) {
//		          if (data[i].AuthType.toLowerCase() == "oidc") {
//		        	  OIDC_DEV = data[i].JobStatus.toLowerCase();
//		        	  console.log("OIDC in " + env + ": " + OIDC_DEV);
//		          } else if (data[i].AuthType.toLowerCase() == "saml2") {
//		        	  	SAML_DEV = data[i].JobStatus.toLowerCase();
//		        	  	console.log("SAML in " + env + ": " + SAML_DEV);
//		          } // end if-else-if
//	          } // end for		
//		}); // end $.getJSON

	} else if (env.toLowerCase() == "Prod".toLowerCase()) {
//		for (i = 0; i < PROD_HOSTS_WEBSEALS.length; i++) {
		console.log("Calling " + PROD_HOST + "/w3id-svc/getListingWebSealLogs?env=" + env.toLowerCase());
//			$.ajax({
//				  dataType: "json",
//				  url: PROD_HOSTS_WEBSEALS[i] + "/wga/reverseproxy_logging/instance/" + PROD_INST_WEBSEAL,
//				  type: "get",
////				  async: false,
//				  dataType:"jsonp",
//			      jsonp:"mycallback"
//			      success: function(data){
//			          for (var i in data) {
//			        	  console.log(data[i].id);
//			          } // end for		
//				  } // end success
//				}); // end $.ajax

//		$.getJSON("https://dal9-ppd-cfmicio2-01.sec.ibm.com:19443/w3id-svc/checkPendingJobs?env=" + env, function(data){
//	          for (var i in data) {
//		          if (data[i].AuthType.toLowerCase() == "oidc") {
//		        	  OIDC_PROD = data[i].JobStatus.toLowerCase();
//		        	  console.log("OIDC in " + env + ": " + OIDC_PROD);
//		          } else if (data[i].AuthType.toLowerCase() == "saml2") {
//			        	  SAML_PROD = data[i].JobStatus.toLowerCase();
//			        	  console.log("SAML in " + env + ": " + SAML_PROD);
//		          } // end if-else-if
//	          } // end for		
//		}); // end $.getJSON
//		} // end for
	} // end outer if
}

function getLogsListing(env, host) {
	console.log("Fetching logs listing from " + env.toLowerCase() + "...");
	if (env.toLowerCase() == "Staging".toLowerCase()) {
//		for (i = 0; i < STAG_HOSTS_WEBSEALS.length; i++) {
			console.log("Calling " + STAG_HOST + "/w3id-svc/getListingWebSealLogs?env=" + env.toLowerCase());
			$.ajax({
				  dataType: "json",
				  url: STAG_HOST + "/w3id-svc/getListingWebSealLogs?env=" + env,
				  type: "get",
				  async: false,
				  success: function(data){
			          for (var key in data) {
			        	  if (data.hasOwnProperty(key)) {
			        		  var isamhost = data[key].Host;
				        	  console.log("HOST in " + env + ": " + isamhost);
				        	  if (isamhost.includes("01")) {
					        	  var host1_logFiles = data[key].Logs.sort();
//					        	  host1_logFiles = host1_logFiles.sort();
					        	  for (var key2 in host1_logFiles) {
					        		  if (host1_logFiles.hasOwnProperty(key2)) {
					        			  if (host1_logFiles[key2].id.includes("request")) {
					        				  console.log("Log Files: " + host1_logFiles[key2].id);
					        				  requestLogs.push(host1_logFiles[key2].id);
					        			  } else if (host1_logFiles[key2].id.includes("msg")) {
					        				  console.log("Log Files: " + host1_logFiles[key2].id);
					        				  webSealLogs.push(host1_logFiles[key2].id);
					        			  } // end if
				        			  } else if (host1_logFiles[key2].id.includes("trace")) {
				        				  console.log("Log Files: " + host1_logFiles[key2].id);
				        				  traceLogs.push(host1_logFiles[key2].id);
					        		  } // end if
					        	  } // end for key2
					  		  	pushChangesToUI(requestLogs, env, "host1");
				        	  } // end if re: host 01
				          } // end if-else-if
			          } // end for key
				  } // end success	
				}); // end $.ajax
		

			
//		$.getJSON("https://dal9-ppd-cfmicio2-01.sec.ibm.com:19443/w3id-svc/checkPendingJobs?env=" + env, function(data){
//	          for (var i in data) {
//		          if (data[i].AuthType.toLowerCase() == "oidc") {
//		        	  OIDC_STAGING = data[i].JobStatus.toLowerCase();
//		        	  console.log("OIDC in " + env + ": " + OIDC_STAGING);
//		          } else if (data[i].AuthType.toLowerCase() == "saml2") {
//			        	SAML_STAGING = data[i].JobStatus.toLowerCase();
//			        	console.log("SAML in " + env + ": " + SAML_STAGING);
//		          } // end if-else-if
//	          } // end for		
//		}); // end $.getJSON
//		} // end for loop
	} else if (env.toLowerCase() == "Dev".toLowerCase() || env.toLowerCase() == "Test".toLowerCase()) {
		console.log("Calling " + TEST_HOST + "/w3id-svc/getListingWebSealLogs?env=" + env.toLowerCase());

//		$.ajax({
//			  dataType: "json",
//			  url: DEV_HOST + "/w3id-svc/checkPendingJobs?env=" + env,
//			  type: "get",
//			  async: false,
//			  success: function(data){
//		          for (var i in data) {
//			          if (data[i].AuthType.toLowerCase() == "oidc") {
//			        	  OIDC_DEV = data[i].JobStatus.toLowerCase();
//			        	  console.log("OIDC in " + env + ": " + OIDC_DEV);
//			          } else if (data[i].AuthType.toLowerCase() == "saml2") {
//			        	  SAML_DEV = data[i].JobStatus.toLowerCase();
//			        	  console.log("SAML in " + env + ": " + SAML_DEV);
//			          } // end if-else-if
//		          } // end for		
//			}
//			}); // end $.ajax
		
//		$.getJSON("https://dal9-ppd-cfmicio2-01.sec.ibm.com:19443/w3id-svc/checkPendingJobs?env=" + env, function(data){
//	          for (var i in data) {
//		          if (data[i].AuthType.toLowerCase() == "oidc") {
//		        	  OIDC_DEV = data[i].JobStatus.toLowerCase();
//		        	  console.log("OIDC in " + env + ": " + OIDC_DEV);
//		          } else if (data[i].AuthType.toLowerCase() == "saml2") {
//		        	  	SAML_DEV = data[i].JobStatus.toLowerCase();
//		        	  	console.log("SAML in " + env + ": " + SAML_DEV);
//		          } // end if-else-if
//	          } // end for		
//		}); // end $.getJSON

	} else if (env.toLowerCase() == "Prod".toLowerCase()) {
//		for (i = 0; i < PROD_HOSTS_WEBSEALS.length; i++) {
		console.log("Calling " + PROD_HOST + "/w3id-svc/getListingWebSealLogs?env=" + env.toLowerCase());
//			$.ajax({
//				  dataType: "json",
//				  url: PROD_HOSTS_WEBSEALS[i] + "/wga/reverseproxy_logging/instance/" + PROD_INST_WEBSEAL,
//				  type: "get",
////				  async: false,
//				  dataType:"jsonp",
//			      jsonp:"mycallback"
//			      success: function(data){
//			          for (var i in data) {
//			        	  console.log(data[i].id);
//			          } // end for		
//				  } // end success
//				}); // end $.ajax

//		$.getJSON("https://dal9-ppd-cfmicio2-01.sec.ibm.com:19443/w3id-svc/checkPendingJobs?env=" + env, function(data){
//	          for (var i in data) {
//		          if (data[i].AuthType.toLowerCase() == "oidc") {
//		        	  OIDC_PROD = data[i].JobStatus.toLowerCase();
//		        	  console.log("OIDC in " + env + ": " + OIDC_PROD);
//		          } else if (data[i].AuthType.toLowerCase() == "saml2") {
//			        	  SAML_PROD = data[i].JobStatus.toLowerCase();
//			        	  console.log("SAML in " + env + ": " + SAML_PROD);
//		          } // end if-else-if
//	          } // end for		
//		}); // end $.getJSON
//		} // end for
	} // end outer if
}

function getLogs(env, filter, timeframe) {

	var logs = "";
	var downloadKey = "";
	var message = [];

	var rpDownloadKey = "";
	var rpMessage = [];

	var isamDownloadKey = "";
	var isamMessage = [];

	var isamFedDownloadKey = "";
	var isamFedMessage = [];

	var tfimDownloadKey = "";
	var tfimMessage = [];

	var report = "";
	var msg = ""; 
	var dKey = "";
	var qstring = "";
	var keys = [];
	
	
	if (filter === "timeframe") {
		console.log("Fetching logs from " + env.toLowerCase() + "with the timeframe " + timeframe + "...");
		qstring += "&" + filter + "=" + timeframe;
	} else {
		console.log("Fetching " + filter + " logs from " + env.toLowerCase() + "...");
		qstring += "&filter=" + filter;
	}
	
	if (rpLogsToFetch.length > 0) {
		
		console.log("WebSEAL log(s) files requested...");
		console.log("# of WebSEAL hosts requested % # of total WebSEAL hosts possible = " + (rpLogsToFetch.length % PROD_HOSTS_WEBSEAL.length));
		var numOfHosts = 0;
		var indexOfMostLogsRequested = 0;
		
		
		for (var i = 0; i < rpLogsToFetch.length; i++) {
			for (var j = 0; j < PROD_HOSTS_WEBSEAL; j++) {
				if (rpLogsToFetch[i].Host == PROD_HOSTS_WEBSEAL[j]) {
					numOfHosts++;
				} else {
					numOfHosts--;
				}
			}
			
			host = rpLogsToFetch[i].Host;
			hostLogs = rpLogsToFetch[i].Logs;
			if (hostLogs.length > rpLogsToFetch[indexOfMostLogsRequested].Logs.length) {
				indexOfMostLogsRequested=i; 
			}
			

		}  // end for (var i = 0; i < rpLogsToFetch.length; i++) {

		console.log("Host index of the most logs requested: " + indexOfMostLogsRequested);
		logs = stringifyArray(rpLogsToFetch[indexOfMostLogsRequested].Logs, ",");
		url = "env=" + env.toLowerCase() + "&logs=" + logs + qstring;

		if ((rpLogsToFetch.length % PROD_HOSTS_WEBSEAL.length) == 0 && (numOfHosts == 0)) {
			console.log("All WebSEAL Hosts are included in the request");
		} else {
			console.log("Some WebSEAL Hosts are included in the request");
			var hosts = [];
			for (var i = 0; i < rpLogsToFetch.length; i++) {
				hosts.push(rpLogsToFetch[i].Host);
			}
			url += "&host=" + stringifyArray(hosts, ",");

		}

		console.log("Calling " + PROD_HOST + LOGS_FETCH_URI + "?" + url);

		
		$.ajax({
			dataType: "json",
			url: PROD_HOST + LOGS_FETCH_URI,
			type: "get",
			async: true,
			data: url,
			success: function(data) {
				console.log("Done with call");
				for (var k in data) {
					console.log("JSON String: " + JSON.stringify(data[k]));
					report = data[k].Report;
					if (typeof report != 'undefined') {
						for (var l in report) {
							dKey = report[l].Key;
							if (typeof dKey != 'undefined') {
								downloadKey = dKey.trim();
//								downloadKey.push({"Type" : "WebSEAL", "Key" : dKey.trim()});
								console.log("downloadKey (from report) = " + downloadKey);
							} else {	
								msg = report[l].Message;
								if (typeof msg != 'undefined') {
									message.push(msg.trim());
//									message.push({"Message" : "Re: WebSEAL Logs [" + msg.trim() + "]"});
									console.log("message (from report) = " + message);
								}
							}							
						} // end for on report
					} else {
						dKey = data[k].Key;
						if (typeof dKey != 'undefined') {
							downloadKey = dKey.trim();
//							downloadKey.push({"Type" : "WebSEAL", "Key" : dKey.trim()});
							console.log("downloadKey = " + downloadKey);
						} else {	
							msg = data[k].Message;
							if (typeof msg != 'undefined') {
								message.push(msg.trim());
//								message.push({"Message" : "Re: WebSEAL Logs [" + msg.trim() + "]"});
								console.log("message = " + message);
							} 
						}
					} 
				} // end for on data
				
//				if (downloadKey.length > 0 && message.length == 0) {
//					console.log("There are " + downloadKey.length + " downloadKey values (no messages)");
//					for (var a in downloadKey) {
//						console.log("Type: " + downloadKey[a].Type);
//						console.log("Key: " + downloadKey[a].Key);
//						keys.push(downloadKey[a].Key);
//					}
//					
//					displayMessage("Your download key(s) for " + downloadKey[0].Type + " logs: " + stringifyArray(keys, ","));
//					
//				} else if (downloadKey.length > 0 && message.length > 0) {
//					console.log("There are only downloadKey values and messages");
//				} else if (downloadKey.length == 0 && message.length > 0) {
//					console.log("There are only messages (no downloadKey values )");
//				}
//				
				if (typeof downloadKey != 'undefined' && downloadKey != "") {
					console.log("downloadKey is not undefined");
					if (typeof message != 'undefined' && message != "" && !message.includes(downloadKey)) {
						console.log("Values of downloadKey and message do not match");
						rpDownloadKey = downloadKey;
						rpMessage.push(message);

//						displayMessage("Your download key is: " + downloadKey, message);
					} else {
						console.log("Values of downloadKey and message match, or is not accompanied with a message");
						displayDownloadKey(downloadKey);
					}
				} else {
					console.log("No downloadKey");
					if (typeof message != 'undefined') {
						console.log("Only message was return");
						displayMessage("Attention!", message);
					}
				} // end if (typeof downloadKey != 'undefined' && downloadKey != "") {
			} // end success
		}); // end $.ajax			
				
		
	}
	
	if (isamLogsToFetch.length > 0) {
		console.log("ISAM Application log(s) files requested...");
	}

	if (isamFedLogsToFetch.length > 0) {
		console.log("ISAM Federation log(s) files requested...");
	}
	
	if (tfimLogsToFetch.length > 0) {
		console.log("TFIM log(s) files requested...");
	}

	
	if (true) return;
	
	var indexOfMostLogsRequested = 0;
	for (var i in allLogsToFetch) {
//		console.log("Host index: " + i);
		host = allLogsToFetch[i].Host;
		console.log("Host name: " + host);
		hostLogs = allLogsToFetch[i].Logs;
//		console.log("Number of log files requested: " + allLogsToFetch[i].Host);
		if (hostLogs.length > allLogsToFetch[indexOfMostLogsRequested].Logs.length) {
			indexOfMostLogsRequested=i; 
		}
	} // end for
	
	console.log("Host index of the most logs requested: " + indexOfMostLogsRequested);
	
	logs = stringifyArray(allLogsToFetch[indexOfMostLogsRequested].Logs, ",");
	url = "env=" + env.toLowerCase() + "&logs=" + logs;

	if (filter === "timeframe") {
		console.log("Fetching logs from " + env.toLowerCase() + "with the timeframe " + timeframe + "...");
		 url += "&" + filter + "=" + timeframe;
	} else {
		console.log("Fetching " + filter + " logs from " + env.toLowerCase() + "...");
		 url += "&filter=" + filter;
	}
	
	if (env.toLowerCase() == "Staging".toLowerCase()) {
		
		if (allLogsToFetch.length < STAG_HOSTS_WEBSEALS.length) {
			
			console.log("Logs from less then all servers requested");
			var host = "";
			for (var j in allLogsToFetch) {
				host += allLogsToFetch[j].Host;
				if (j < allLogsToFetch.length-1) {
					host += ",";
				} // end if (j < allLogsToFetch.length-1) {
			} // end for (var j in allLogsToFetch) {
				
			url += '&host=' + host;

		} else {
			console.log("Logs from all servers requested");
		}

//		logs = stringifyArray(allLogsToFetch[indexOfMostLogsRequested].Logs, ",");
		console.log("Calling " + STAG_HOST + LOGS_FETCH_URI + "?" + url);
		$.ajax({
			dataType: "json",
			url: STAG_HOST + LOGS_FETCH_URI + "?" + url,
			type: "get",
			async: true,
//			data: url,
			success: function(data) {
				console.log("Done with call");
				for (var k in data) {
					console.log("JSON String: " + JSON.stringify(data[k]));
					report = data[k].Report;
					if (typeof report != 'undefined') {
						for (var l in report) {
							dKey = report[l].Key;
							if (typeof dKey != 'undefined') {
								downloadKey = dKey.trim();
								console.log("downloadKey (from report) = " + downloadKey);
							} else {	
								msg = report[l].Message;
								if (typeof msg != 'undefined') {
									message.push(msg.trim());
									console.log("message (from report) = " + message);
								}
							}							
						} // end for on report
					} else {
						dKey = data[k].Key;
						if (typeof dKey != 'undefined') {
							downloadKey = dKey.trim();
							console.log("downloadKey = " + downloadKey);
						} else {	
							msg = data[k].Message;
							if (typeof msg != 'undefined') {
								message.push(msg.trim());
								console.log("message = " + message);
							} 
						}
					} 
				} // end for on data
				
				if (typeof downloadKey != 'undefined' && downloadKey != "") {
					console.log("downloadKey is not undefined");
					if (typeof message != 'undefined' && message != "" && !message.includes(downloadKey)) {
						console.log("Values of downloadKey and message do not match");
						displayMessage("Your download key is: " + downloadKey, message);
					} else {
						console.log("Values of downloadKey and message match, or is not accompanied with a message");
						displayDownloadKey(downloadKey);
					}
				} else {
					console.log("No downloadKey");
					if (typeof message != 'undefined') {
						console.log("Only message was return");
						displayMessage("Attention!", message);
					}
				} // end if (typeof downloadKey != 'undefined' && downloadKey != "") {
			} // end success
		}); // end $.ajax			
				
	} else if (env.toLowerCase() == "Dev".toLowerCase() || env.toLowerCase() == "Test".toLowerCase()) {
		
		if (allLogsToFetch.length < TEST_HOSTS_WEBSEALS.length) {
			
			console.log("Logs from less then all servers requested");
			var host = "";
			for (var j in allLogsToFetch) {
				host += allLogsToFetch[j].Host;
				if (j < allLogsToFetch.length-1) {
					host += ",";
				} // end if (j < allLogsToFetch.length-1) {
			} // end for (var j in allLogsToFetch) {
				
			url += '&host=' + host;

		} else {
			console.log("Logs from all servers requested");
		}

//		logs = stringifyArray(allLogsToFetch[indexOfMostLogsRequested].Logs, ",");
		console.log("Calling " + TEST_HOST + LOGS_FETCH_URI + "?"+ url);
		
		$.ajax({
			dataType: "json",
			url: TEST_HOST + LOGS_FETCH_URI + "?" + url,
			type: "get",
			async: true,
//			data: url,
			success: function(data) {
				console.log("Done with call");
				for (var k in data) {
					console.log("JSON String: " + JSON.stringify(data[k]));
					report = data[k].Report;
					if (typeof report != 'undefined') {
						for (var l in report) {
							dKey = report[l].Key;
							if (typeof dKey != 'undefined') {
								downloadKey = dKey.trim();
								console.log("downloadKey (from report) = " + downloadKey);
							} else {	
								msg = report[l].Message;
								if (typeof msg != 'undefined') {
									message.push(msg.trim());
									console.log("message (from report) = " + message);
								}
							}							
						} // end for on report
					} else {
						dKey = data[k].Key;
						if (typeof dKey != 'undefined') {
							downloadKey = dKey.trim();
							console.log("downloadKey = " + downloadKey);
						} else {	
							msg = data[k].Message;
							if (typeof msg != 'undefined') {
								message.push(msg.trim());
								console.log("message = " + message);
							} 
						}
					} 
				} // end for on data
				
				if (typeof downloadKey != 'undefined' && downloadKey != "") {
					console.log("downloadKey is not undefined");
					if (typeof message != 'undefined' && message != "" && !message.includes(downloadKey)) {
						console.log("Values of downloadKey and message do not match");
						displayMessage("Your download key is: " + downloadKey, message);
					} else {
						console.log("Values of downloadKey and message match, or is not accompanied with a message");
						displayDownloadKey(downloadKey);
					}
				} else {
					console.log("No downloadKey");
					if (typeof message != 'undefined') {
						console.log("Only message was return");
						displayMessage("Attention!", message);
					}
				} // end if (typeof downloadKey != 'undefined' && downloadKey != "") {
			} // end success
		}); // end $.ajax		
			
	} else if (env.toLowerCase() == "Prod".toLowerCase()) {
		
		for (var i = 0; i < allLogsToFetch.length; i++) {
			console.log("Host: " + allLogsToFetch[i].Host);
//			console.log("Logs: " + allLogsToFetch[i].Logs);
			
			console.log("Calling " + PROD_HOST + LOGS_FETCH_URI + "?" + url + '&host=' + allLogsToFetch[i].Host);
			
			$.ajax({
				dataType: "json",
				url: PROD_HOST + LOGS_FETCH_URI,
				type: "get",
				async: true,
				data: url + '&host=' + allLogsToFetch[i].Host,
				success: function(data) {
					console.log("Done with call");
					for (var k in data) {
						console.log("JSON String: " + JSON.stringify(data[k]));
						report = data[k].Report;
						if (typeof report != 'undefined') {
							for (var l in report) {
								dKey = report[l].Key;
								if (typeof dKey != 'undefined') {
									downloadKey = dKey.trim();
									console.log("downloadKey (from report) = " + downloadKey);
								} else {	
									msg = report[l].Message;
									if (typeof msg != 'undefined') {
										message.push(msg.trim());
										console.log("message (from report) = " + message);
									}
								}							
							} // end for on report
						} else {
							dKey = data[k].Key;
							if (typeof dKey != 'undefined') {
								downloadKey.push(dKey.trim());
								console.log("downloadKey = " + downloadKey);
							} else {	
								msg = data[k].Message;
								if (typeof msg != 'undefined') {
									message.push(msg.trim());
									console.log("message = " + message);
								} 
							}
						} 
					} // end for on data
					
					
				} // end success
			}); // end $.ajax
			
		} // end for
		
		displayMessage("Your download keys are: " + downloadKey, message);
		
//		if (typeof downloadKey != 'undefined' && downloadKey != "") {
//			console.log("downloadKey is not undefined");
//			if (typeof message != 'undefined' && message != "" && !message.includes(downloadKey)) {
//				console.log("Values of downloadKey and message do not match");
//				displayMessage("Your download key is: " + downloadKey, message);
//			} else {
//				console.log("Values of downloadKey and message match, or is not accompanied with a message");
//				displayDownloadKey(downloadKey);
//			}
//		} else {
//			console.log("No downloadKey");
//			if (typeof message != 'undefined') {
//				console.log("Only message was return");
//				displayMessage("Attention!", message);
//			}
//		} // end if (typeof downloadKey != 'undefined' && downloadKey != "") {
//		
		
		if (true) return;
		
		if (
				allLogsToFetch.length < PROD_HOSTS_WEBSEAL.length
 			 || allLogsToFetch.length < PROD_HOSTS_ISAM.length
// 			 || allLogsToFetch.length < PROD_HOSTS_ISAM_FED.length
// 			 || allLogsToFetch.length < PROD_HOSTS_TFIM.length
			) {
			
			console.log("Logs from less then all servers requested");
			var host = "";
			for (var j in allLogsToFetch) {
				host += allLogsToFetch[j].Host;
				if (j < allLogsToFetch.length-1) {
					host += ",";
				} // end if (j < allLogsToFetch.length-1) {
			} // end for (var j in allLogsToFetch) {
				
			url += '&host=' + host;

		} else {
			console.log("Logs from all servers requested");
		}

//		console.log("Calling " + PROD_HOST + LOGS_FETCH_URI + "?" + url);
				
//		$.ajax({
//			dataType: "json",
//			url: PROD_HOST + LOGS_FETCH_URI + "?" + url,
//			type: "get",
//			async: true,
////			data: url,
//			success: function(data) {
//				console.log("Done with call");
//				for (var k in data) {
//					console.log("JSON String: " + JSON.stringify(data[k]));
//					report = data[k].Report;
//					if (typeof report != 'undefined') {
//						for (var l in report) {
//							dKey = report[l].Key;
//							if (typeof dKey != 'undefined') {
//								downloadKey = dKey.trim();
//								console.log("downloadKey (from report) = " + downloadKey);
//							} else {	
//								msg = report[l].Message;
//								if (typeof msg != 'undefined') {
//									message.push(msg.trim());
//									console.log("message (from report) = " + message);
//								}
//							}							
//						} // end for on report
//					} else {
//						dKey = data[k].Key;
//						if (typeof dKey != 'undefined') {
//							downloadKey = dKey.trim();
//							console.log("downloadKey = " + downloadKey);
//						} else {	
//							msg = data[k].Message;
//							if (typeof msg != 'undefined') {
//								message.push(msg.trim());
//								console.log("message = " + message);
//							} 
//						}
//					} 
//				} // end for on data
//				
//				if (typeof downloadKey != 'undefined' && downloadKey != "") {
//					console.log("downloadKey is not undefined");
//					if (typeof message != 'undefined' && message != "" && !message.includes(downloadKey)) {
//						console.log("Values of downloadKey and message do not match");
//						displayMessage("Your download key is: " + downloadKey, message);
//					} else {
//						console.log("Values of downloadKey and message match, or is not accompanied with a message");
//						displayDownloadKey(downloadKey);
//					}
//				} else {
//					console.log("No downloadKey");
//					if (typeof message != 'undefined') {
//						console.log("Only message was return");
//						displayMessage("Attention!", message);
//					}
//				} // end if (typeof downloadKey != 'undefined' && downloadKey != "") {
//			} // end success
//		}); // end $.ajax
			
	} // end outer if
	
}

function searchLogs(env, timeframe, searchString) {

	var logs = "";
	var downloadKey = "";
	var message = [];
	var report = "";
	var msg = ""; 
	var dKey = "";

	var indexOfMostLogsRequested = 0;
	for (var i in allLogsToFetch) {
		host = allLogsToFetch[i].Host;
		hostLogs = allLogsToFetch[i].Logs;
		if (hostLogs.length > allLogsToFetch[indexOfMostLogsRequested].Logs.length) {
			indexOfMostLogsRequested=i; 
		}
	} // end for
	
	console.log("Host index of the most logs requested: " + indexOfMostLogsRequested);
	
	logs = stringifyArray(allLogsToFetch[indexOfMostLogsRequested].Logs, ",");
	url = "env=" + env.toLowerCase() + "&logs=" + logs + "&search=\"" + searchString + "\"";

	if (timeframe != null) {
		console.log("Searching logs from " + env.toLowerCase() + "with the timeframe " + timeframe + "...");
		 url += "&timeframe=" + timeframe;
	} else {
		console.log("Searching all logs, today, from " + env.toLowerCase() + "...");
	}
	
	if (env.toLowerCase() == "Staging".toLowerCase()) {
			
		if (allLogsToFetch.length < STAG_HOSTS_WEBSEALS.length) {
			
			console.log("Logs from less then all servers requested");
			var host = "";
			for (var j in allLogsToFetch) {
				host += allLogsToFetch[j].Host;
				if (j < allLogsToFetch.length-1) {
					host += ",";
				} // end if (j < allLogsToFetch.length-1) {
			} // end for (var j in allLogsToFetch) {
				
			url += '&host=' + host;

		} else {
			console.log("Logs from all servers requested");
		}

//		logs = stringifyArray(allLogsToFetch[indexOfMostLogsRequested].Logs, ",");
		console.log("Calling " + STAG_HOST + LOGS_FETCH_URI + url);
					
		$.ajax({
			dataType: "json",
			url: STAG_HOST + LOGS_FETCH_URI + "?" + url,
			type: "get",
			async: true,
//			data: url,
			success: function(data) {
				console.log("Done with call");
				for (var k in data) {
					console.log("JSON String: " + JSON.stringify(data[k]));
					report = data[k].Report;
					if (typeof report != 'undefined') {
						for (var l in report) {
							dKey = report[l].Key;
							if (typeof dKey != 'undefined') {
								downloadKey = dKey.trim();
								console.log("downloadKey (from report) = " + downloadKey);
							} else {	
								msg = report[l].Message;
								if (typeof msg != 'undefined') {
									message.push(msg.trim());
									console.log("message (from report) = " + message);
								}
							}							
						} // end for on report
					} else {
						dKey = data[k].Key;
						if (typeof dKey != 'undefined') {
							downloadKey = dKey.trim();
							console.log("downloadKey = " + downloadKey);
						} else {	
							msg = data[k].Message;
							if (typeof msg != 'undefined') {
								message.push(msg.trim());
								console.log("message = " + message);
							} 
						}
					} 
				} // end for on data
				
				if (typeof downloadKey != 'undefined' && downloadKey != "") {
					console.log("downloadKey is not undefined");
					if (typeof message != 'undefined' && message != "" && !message.includes(downloadKey)) {
						console.log("Values of downloadKey and message do not match");
						displayMessage("Your download key is: " + downloadKey, message);
					} else {
						console.log("Values of downloadKey and message match, or is not accompanied with a message");
						displayDownloadKey(downloadKey);
					}
				} else {
					console.log("No downloadKey");
					if (typeof message != 'undefined') {
						console.log("Only message was return");
						displayMessage("Attention!", message);
					}
				} // end if (typeof downloadKey != 'undefined' && downloadKey != "") {
			} // end success
		}); // end $.ajax
				
	} else if (env.toLowerCase() == "Dev".toLowerCase() || env.toLowerCase() == "Test".toLowerCase()) {
		
		if (allLogsToFetch.length < TEST_HOSTS_WEBSEALS.length) {
			
			console.log("Logs from less then all servers requested");
			var host = "";
			for (var j in allLogsToFetch) {
				host += allLogsToFetch[j].Host;
				if (j < allLogsToFetch.length-1) {
					host += ",";
				} // end if (j < allLogsToFetch.length-1) {
			} // end for (var j in allLogsToFetch) {
				
			url += '&host=' + host;

		} else {
			console.log("Logs from all servers requested");
		}
		
		console.log("Calling " + TEST_HOST + LOGS_FETCH_URI + url);
				
		$.ajax({
			dataType: "json",
			url: TEST_HOST + LOGS_FETCH_URI + "?" + url,
			type: "get",
			async: true,
//			data: url,
			success: function(data) {
				console.log("Done with call");
				for (var k in data) {
					console.log("JSON String: " + JSON.stringify(data[k]));
					report = data[k].Report;
					if (typeof report != 'undefined') {
						for (var l in report) {
							dKey = report[l].Key;
							if (typeof dKey != 'undefined') {
								downloadKey = dKey.trim();
								console.log("downloadKey (from report) = " + downloadKey);
							} else {	
								msg = report[l].Message;
								if (typeof msg != 'undefined') {
									message.push(msg.trim());
									console.log("message (from report) = " + message);
								}
							}							
						} // end for on report
					} else {
						dKey = data[k].Key;
						if (typeof dKey != 'undefined') {
							downloadKey = dKey.trim();
							console.log("downloadKey = " + downloadKey);
						} else {	
							msg = data[k].Message;
							if (typeof msg != 'undefined') {
								message.push(msg.trim());
								console.log("message = " + message);
							} 
						}
					} 
				} // end for on data
				
				if (typeof downloadKey != 'undefined' && downloadKey != "") {
					console.log("downloadKey is not undefined");
					if (typeof message != 'undefined' && message != "" && !message.includes(downloadKey)) {
						console.log("Values of downloadKey and message do not match");
						displayMessage("Your download key is: " + downloadKey, message);
					} else {
						console.log("Values of downloadKey and message match, or is not accompanied with a message");
						displayDownloadKey(downloadKey);
					}
				} else {
					console.log("No downloadKey");
					if (typeof message != 'undefined') {
						console.log("Only message was return");
						displayMessage("Attention!", message);
					}
				} // end if (typeof downloadKey != 'undefined' && downloadKey != "") {
			} // end success
		}); // end $.ajax
			
	} else if (env.toLowerCase() == "Prod".toLowerCase()) {
		
		if (allLogsToFetch.length < PROD_HOSTS_WEBSEALS.length) {
			
			console.log("Logs from less then all servers requested");
			var host = "";
			for (var j in allLogsToFetch) {
				host += allLogsToFetch[j].Host;
				if (j < allLogsToFetch.length-1) {
					host += ",";
				} // end if (j < allLogsToFetch.length-1) {
			} // end for (var j in allLogsToFetch) {
				
			url += '&host=' + host;

		} else {
			console.log("Logs from all servers requested");
		}
		
		console.log("Calling " + PROD_HOST + LOGS_FETCH_URI + url);
		
		$.ajax({
			dataType: "json",
			url: PROD_HOST + LOGS_FETCH_URI + "?" + url,
			type: "get",
			async: true,
//			data: url,
			success: function(data) {
				console.log("Done with call");
				for (var k in data) {
					console.log("JSON String: " + JSON.stringify(data[k]));
					report = data[k].Report;
					if (typeof report != 'undefined') {
						for (var l in report) {
							dKey = report[l].Key;
							if (typeof dKey != 'undefined') {
								downloadKey = dKey.trim();
								console.log("downloadKey (from report) = " + downloadKey);
							} else {	
								msg = report[l].Message;
								if (typeof msg != 'undefined') {
									message.push(msg.trim());
									console.log("message (from report) = " + message);
								}
							}							
						} // end for on report
					} else {
						dKey = data[k].Key;
						if (typeof dKey != 'undefined') {
							downloadKey = dKey.trim();
							console.log("downloadKey = " + downloadKey);
						} else {	
							msg = data[k].Message;
							if (typeof msg != 'undefined') {
								message.push(msg.trim());
								console.log("message = " + message);
							} 
						}
					} 
				} // end for on data
				
				if (typeof downloadKey != 'undefined' && downloadKey != "") {
					console.log("downloadKey is not undefined");
					if (typeof message != 'undefined' && message != "" && !message.includes(downloadKey)) {
						console.log("Values of downloadKey and message do not match");
						displayMessage("Your download key is: " + downloadKey, message);
					} else {
						console.log("Values of downloadKey and message match, or is not accompanied with a message");
						displayDownloadKey(downloadKey);
					}
				} else {
					console.log("No downloadKey");
					if (typeof message != 'undefined') {
						console.log("Only message was return");
						displayMessage("Attention!", message);
					}
				} // end if (typeof downloadKey != 'undefined' && downloadKey != "") {
			} // end success
		}); // end $.ajax
			
	} // end outer if
	
}



function retrieveLogs(env, downloadKey) {

	console.log("Preparing to fetch logs using  " + downloadKey + " from " + env.toLowerCase() + "...");
	
	url = "env=" + env.toLowerCase() + "&key=" + downloadKey;
	
	if (env.toLowerCase() == "Staging".toLowerCase()) {

//		console.log("Calling " + STAG_HOST + "/w3id-svc/getWebSealLogs" + url);
		console.log("Calling " + STAG_HOST + LOGS_FETCH_URI + url);
		
		$.ajax({
//			url: STAG_HOST + "/w3id-svc/getWebSealLogs",
			url: STAG_HOST + LOGS_FETCH_URI,
			type: "get",
			async: true,
			data: url
		}).done(function (data, textStatus, xhr) {
			if (xhr.getResponseHeader('Content-Type') == "application/json") {
				for (var k in data) {
					console.log("JSON String: " + JSON.stringify(data[k]));
	  				message = data[k].Message;
	  			} // end for
				displayMessage(message, "");
			} else {
				$('#dialog-please-wait').dialog("close");
				displayMessage("File download is ready.", "Please ensure you allow pop-ups for this session.");
				window.open(STAG_HOST + LOGS_FETCH_URI + "?" + url);
			}
		});; // end $.ajax
				
	} else if (env.toLowerCase() == "Dev".toLowerCase() || env.toLowerCase() == "Test".toLowerCase()) {

//		console.log("Calling " + TEST_HOST + "/w3id-svc/getWebSealLogs" + url);
		console.log("Calling " + TEST_HOST + LOGS_FETCH_URI + url);
			
			$.ajax({
//				url: TEST_HOST + "/w3id-svc/getWebSealLogs",
				url: TEST_HOST + LOGS_FETCH_URI,
				type: "get",
				async: true,
				data: url
			}).done(function (data, textStatus, xhr) {
				if (xhr.getResponseHeader('Content-Type') == "application/json") {
					for (var k in data) {
						console.log("JSON String: " + JSON.stringify(data[k]));
		  				message = data[k].Message;
		  			} // end for
					displayMessage(message, "");
				} else {
					$('#dialog-please-wait').dialog("close");
					displayMessage("File download is ready.", "Please ensure you allow pop-ups for this session.");
					window.open(TEST_HOST + LOGS_FETCH_URI + "?" + url);
				}
			});; // end $.ajax
					
	} else if (env.toLowerCase() == "Prod".toLowerCase()) {

//		console.log("Calling " + PROD_HOST + "/w3id-svc/getWebSealLogs" + url);
		console.log("Calling " + PROD_HOST + LOGS_FETCH_URI + url);
		
		$.ajax({
//			url: PROD_HOST + "/w3id-svc/getWebSealLogs",
			url: PROD_HOST + LOGS_FETCH_URI,
			type: "get",
			async: true,
			data: url
		}).done(function (data, textStatus, xhr) {
			if (xhr.getResponseHeader('Content-Type') == "application/json") {
				for (var k in data) {
					console.log("JSON String: " + JSON.stringify(data[k]));
	  				message = data[k].Message;
	  			} // end for
				displayMessage(message, "");
			} else {
				$('#dialog-please-wait').dialog("close");
				displayMessage("File download is ready.", "Please ensure you allow pop-ups for this session.");
				window.open(PROD_HOST + LOGS_FETCH_URI + "?" + url);
			}
		});; // end $.ajax		
		
	} // end outer if
	
}


function displayDownloadKey(downloadKey) {
	$('#dialog-please-wait').dialog("close");
    $('#p-dialog-result-line1').text("Your download key is: " + downloadKey);
    $('#p-dialog-result-line2').text("Please save it to retrieve the ZIP file, once it's available");
    $('#dialog-result').dialog("open");
}

function displayMessage(msg1, msg2) {
	$('#dialog-please-wait').dialog("close");
    $('#p-dialog-result-line1').text(msg1);
    $('#p-dialog-result-line2').text(msg2);
    $('#dialog-result').dialog("open");
}


function mycallback(data)
{
    alert("Here: "+data.id);
}

function make_base_auth(user, password) {
	  var tok = user + ':' + password;
	  var hash = btoa(tok);
	  return "Basic " + hash;
	}

//escape backslash to avoid errors
function escapeJSON (str) {
//	console.log("Removing \" from " + str);
    return str.replace(/\\/gi,'');
}

function pushChangesToUI(requestLogs, env, host) {
	
	
	var children_requestLogs = [];
	var children_webSealLogs = [];

	
	if (requestLogs.length > 0) {
		for (i in requestLogs) {
			console.log(requestLogs[i])
			children_requestLogs.push([{ 
						 "id" 			: requestLogs[i].id,
						 "parent" 		: rootNodeString_requestLogs,
						 "text" 		: requestLogs[i].id, 
						 "state" 		: 
						 	{
							 "opened" 	: false,
							 "selected"	: true 
							 } 
					}]);
		} // end for
		
	} // end if re: requestLogs
	

	if (env.toLowerCase() == "Staging".toLowerCase()) {
	  $('#jstree-div-stag-' + host.toLowerCase()).jstree(
			  {'plugins':["wholerow","checkbox"], 'core' : {
				  'data' : [
				            {
				            	"text" 					: "Request Logs",
				            	"children" 				: children_requestLogs,
				            	"state" : {
				            				opened 		: true,
				            				disabled	: false,
				            				selected	: true
				            			},
				            	"children"				: children_requestLogs				            	
    							
    						}
    														        						
				            ]}});
	} // end if

}

function gatherAllLogsToFetch(env) {
	
	if (allLogsToFetch.length > 0) allLogsToFetch = [];
	if (rpLogsToFetch.length > 0) rpLogsToFetch = [];
	if (isamLogsToFetch.length > 0) isamLogsToFetch = [];
	if (isamFedLogsToFetch.length > 0) isamFedLogsToFetch = [];
	if (tfimLogsToFetch.length > 0) tfimLogsToFetch = [];


//	var logFiles = [];
	var selectedRpFiles = [];
	var selectedIsamFiles = [];
	var selectedIsamFedFiles = [];
	var selectedTfimFiles = [];
	var totalCountOfLogs = 0;
	
	if (env.toLowerCase() == "Staging".toLowerCase()) {
		for (var i = 0; i < STAG_HOSTS_WEBSEALS.length; i++) {
			var logFiles = [];
			var selectedFiles = $('#jstree-div-stag-host-' + (i+1)).jstree(true).get_selected(true);
			console.log("Count of selection from jstree-div-stag-host" + (i+1) + ": " + selectedFiles.length);
			for (var j in selectedFiles) {
				console.log("Selected log type: >>" + selectedFiles[j].text + "<<");
				for (var k in rootNodeElements) {
					console.log("Checking for: >>" + rootNodeElements[k].displayText + "<<");
					if (selectedFiles[j].text === rootNodeElements[k].displayText) {
						logFiles.push(rootNodeElements[k].shortText);
						console.log(rootNodeElements[k].displayText + " to fetch from " + STAG_HOSTS_WEBSEALS[i]);
					} // end if
				} // end inner for k
			} // end inner for j
			allLogsToFetch.push({"Host" : STAG_HOSTS_WEBSEALS[i], "Logs" : logFiles});			  
		} // end outer for i
	} else if (env.toLowerCase() == "Dev".toLowerCase() || env.toLowerCase() == "Test".toLowerCase()) {
		for (var i = 0; i < TEST_HOSTS_WEBSEALS.length; i++) {
			var logFiles = [];
			  var selectedFiles = $('#jstree-div-test-host-' + (i+1)).jstree(true).get_selected(true);
			  console.log("Count of selection from jstree-div-test-host" + (i+1) + ": " + selectedFiles.length);
			  if (selectedFiles.length > 0) {
				  for (var j in selectedFiles) {
					  console.log("Selected log type: >>" + selectedFiles[j].name + "<<");
					  for (var k in rootNodeElements) {
							console.log("Checking for: >>" + rootNodeElements[k].displayText + "<<");
							if (selectedFiles[j].text === rootNodeElements[k].displayText) {
								logFiles.push(rootNodeElements[k].shortText);
							  console.log(rootNodeElements[k].displayText + " to fetch from " + TEST_HOSTS_WEBSEALS[i]);
						  } // end if
					  } // end inner for k
				  } // end inner for j
				  allLogsToFetch.push({"Host" : TEST_HOSTS_WEBSEALS[i], "Logs" : logFiles});
			  } // end if (selectedFiles.length > 0)
		} // end outer for i
	} else if (env.toLowerCase() == "Prod".toLowerCase()) {
		
		for (var i = 0; i < PROD_HOSTS_WEBSEAL.length; i++) {
			selectedRpFiles = $('#jstree-div-prod-rp-host-' + (i+1)).jstree(true).get_selected(true);
			console.log("Count of selection from jstree-div-prod-rp-host" + (i+1) + ": " + selectedRpFiles.length);
			if (selectedRpFiles.length > 0) {
				compileAllLogsToFetch(PROD_HOSTS_WEBSEAL[i], selectedRpFiles, rpElements, rpLogsToFetch);
			} // end if (selectedRpFiles.length > 0) {
		} // end for (var i = 0; i < PROD_HOSTS_WEBSEAL.length; i++) {
		
		for (var i = 0; i < PROD_HOSTS_ISAM.length; i++) {
			selectedIsamFiles = $('#jstree-div-prod-isam-host-' + (i+1)).jstree(true).get_selected(true);
			console.log("Count of selection from jstree-div-prod-isam-host" + (i+1) + ": " + selectedIsamFiles.length);
			if (selectedIsamFiles.length > 0) {
				compileAllLogsToFetch(PROD_HOSTS_ISAM[i], selectedIsamFiles, isamElements, isamLogsToFetch);
			} // end if (selectedIsamFiles.length > 0) {
		} // end for (var i = 0; i < PROD_HOSTS_ISAM.length; i++) {


		for (var i = 0; i < PROD_HOSTS_ISAM_FED.length; i++) {
			selectedIsamFedFiles = $('#jstree-div-prod-isam-fed-host-' + (i+1)).jstree(true).get_selected(true);
			console.log("Count of selection from jstree-div-prod-isam-fed-host" + (i+1) + ": " + selectedIsamFedFiles.length);
			if (selectedIsamFedFiles.length > 0) {
				compileAllLogsToFetch(PROD_HOSTS_ISAM_FED[i], selectedIsamFedFiles, isamFedElements, isamFedLogsToFetch);
			} // end if (selectedIsamFedFiles.length > 0) {
		} // end for (var i = 0; i < PROD_HOSTS_ISAM_FED.length; i++) {


		for (var i = 0; i < PROD_HOSTS_TFIM.length; i++) {
			selectedTfimFiles = $('#jstree-div-prod-tfim-host-' + (i+1)).jstree(true).get_selected(true);
			console.log("Count of selection from jstree-div-prod-tfim-host" + (i+1) + ": " + selectedTfimFiles.length);
			if (selectedTfimFiles.length > 0) {
				compileAllLogsToFetch(PROD_HOSTS_TFIM[i], selectedTfimFiles, tfimElements, tfimLogsToFetch);
			} // end if (selectedIsamFedFiles.length > 0) {
		} // end for (var i = 0; i < PROD_HOSTS_TFIM.length; i++) {


		
	} // end env check
	
	if (rpLogsToFetch.length > 0) {
		for (var i = 0; i < rpLogsToFetch.length; i++) {
			totalCountOfLogs += rpLogsToFetch[i].Logs.length;
			console.log("WebSEAL logs to fetch: " + rpLogsToFetch[i].Logs);
			console.log("Number of WebSEAL logs to fetch: " + rpLogsToFetch[i].Logs.length);
			console.log("Total number of logs requested: " + totalCountOfLogs);
		}
	}
	
	if (isamLogsToFetch.length > 0) {
		for (var i = 0; i < isamLogsToFetch.length; i++) {
			totalCountOfLogs += isamLogsToFetch[i].Logs.length;
			console.log("ISAM logs to fetch: " + isamLogsToFetch[i].Logs);
			console.log("Number of ISAM logs to fetch: " + isamLogsToFetch[i].Logs.length);
			console.log("Total number of logs requested: " + totalCountOfLogs);
		}
	}

	
	if (isamFedLogsToFetch.length > 0) {
		for (var i = 0; i < isamFedLogsToFetch.length; i++) {
			totalCountOfLogs += isamFedLogsToFetch[i].Logs.length;
			console.log("ISAM logs to fetch: " + isamFedLogsToFetch[i].Logs);
			console.log("Number of ISAM logs to fetch: " + isamFedLogsToFetch[i].Logs.length);
			console.log("Total number of logs requested: " + totalCountOfLogs);
		}
	}

	
	if (tfimLogsToFetch.length > 0) {
		for (var i = 0; i < tfimLogsToFetch.length; i++) {
			totalCountOfLogs += tfimLogsToFetch[i].Logs.length;
			console.log("TFIM logs to fetch: " + tfimLogsToFetch[i].Logs);
			console.log("Number of TFIM logs to fetch: " + tfimLogsToFetch[i].Logs.length);
			console.log("Total number of logs requested: " + totalCountOfLogs);
		}
	}
	
//	for (var i in allLogsToFetch) {
//		totalCountOfLogs += allLogsToFetch[i].Logs.length;
//		console.log("Number of logs in this host: " + totalCountOfLogs);
//		console.log("Logs to fetch: " + allLogsToFetch[i].Logs);
//	}
	
	
	return totalCountOfLogs; 
}

function showDownloadDialog(env) {
	
	if (env.toLowerCase() == "Staging".toLowerCase()) {
		$('#dialog-download-stag').dialog({
			resizable: false,
			modal: true			
		});
	} else if (env.toLowerCase() == "Dev".toLowerCase() || env.toLowerCase() == "Test".toLowerCase()) {
		$('#dialog-download-test').dialog({
			resizable: false,
			modal: true			
		});
	} else if (env.toLowerCase() == "Staging".toLowerCase()) {
		$('#dialog-download-prod').dialog({
			resizable: false,
			modal: true			
		});
	} 
	

}


function changeDownloadRadioSelection(env, action) {
	if (action.toLowerCase() != "latest" || action.toLowerCase() != "all" || action.toLowerCase() != "timeframe") {
		action = "latest";
	}
	
	console.log('Attempting to change #radio-dialog-download-' + action.toLowerCase() + '-' + env.toLowerCase());
	
	if (env.toLowerCase() == "Staging".toLowerCase()) {
		$('#radio-dialog-download-' + action.toLowerCase() + '-prod').prop('checked', false);
		$('#radio-dialog-download-' + action.toLowerCase() + '-stag').prop('checked', true);
		$('#radio-dialog-download-' + action.toLowerCase() + '-test').prop('checked', false);
	} else if (env.toLowerCase() == "Dev".toLowerCase() || env.toLowerCase() == "Test".toLowerCase()) {
		$('#radio-dialog-download-' + action.toLowerCase() + '-prod').prop('checked', false);
		$('#radio-dialog-download-' + action.toLowerCase() + '-stag').prop('checked', false);
		$('#radio-dialog-download-' + action.toLowerCase() + '-test').prop('checked', true);
	} else if (env.toLowerCase() == "Prod".toLowerCase()) {
		$('#radio-dialog-download-' + action.toLowerCase() + '-prod').prop('checked', true);
		$('#radio-dialog-download-' + action.toLowerCase() + '-stag').prop('checked', false);
		$('#radio-dialog-download-' + action.toLowerCase() + '-test').prop('checked', false);
	} 
}

function changeSearchRadioSelection(env, action) {
	if (action.toLowerCase() != "latest" || action.toLowerCase() != "all" || action.toLowerCase() != "timeframe") {
		action = "latest";
	}
	
	if (env.toLowerCase() == "Staging".toLowerCase()) {
		$('#radio-dialog-search-' + action.toLowerCase() + '-prod').prop('checked', false);
		$('#radio-dialog-search-' + action.toLowerCase() + '-stag').prop('checked', true);
		$('#radio-dialog-search-' + action.toLowerCase() + '-test').prop('checked', false);
	} else if (env.toLowerCase() == "Dev".toLowerCase() || env.toLowerCase() == "Test".toLowerCase()) {
		$('#radio-dialog-search-' + action.toLowerCase() + '-prod').prop('checked', false);
		$('#radio-dialog-search-' + action.toLowerCase() + '-stag').prop('checked', false);
		$('#radio-dialog-search-' + action.toLowerCase() + '-test').prop('checked', true);
	} else if (env.toLowerCase() == "Prod".toLowerCase()) {
		$('#radio-dialog-search-' + action.toLowerCase() + '-prod').prop('checked', true);
		$('#radio-dialog-search-' + action.toLowerCase() + '-stag').prop('checked', false);
		$('#radio-dialog-search-' + action.toLowerCase() + '-test').prop('checked', false);
	} 
}

function stringifyArray(array, delim) {
	var string = "";
	for (var i = 0; i < array.length; i++) {
		string += array[i];
		if ((i+1) < array.length) string+= delim;
	}
	
	return string;
}

function extractKey(data) {
	var keys = [];
	for (var k in data) {
		console.log("JSON String: " + JSON.stringify(data[k]));
		console.log("Key: " + data[k].Key);
		keys.push(data[k].Key);		  
    } // end for
	
	if (keys.length > 1) {
		keys = $.unique(keys);
	}
	
	return keys;
	
}

//function getJsTreeCheckboxes(env, iteration, serverType, shortText, displayText) {
//	
//	console.log("jstree-div-" + env.toLowerCase() + "-" + serverType + "-host-" + (iteration+1));
//	var jsTreeCheckboxesData = [];
//
//	jsTreeCheckboxesData.push({
//		"id"		: "jstree-div-" + env.toLowerCase() + "-" + serverType + "-" + shortText + "-" + (iteration+1),
//		"text"		: displayText,
//		"state" 	: {
//						opened 		: false,
//				    	disabled	: false,
//				    	selected	: false
//				      }	    							
//		}); 
//
//	return jsTreeCheckboxesData;
//}

function getJsTreeCheckboxes(elements, env, iteration, enabledVal) { // , shortText, displayText // <div id="jstree-div-prod-rp-host-4" class="jstree-div"></div>
	
	console.log("inside getRpJsTreeCheckboxes(env, iteration, enabledVal)");
	console.log("env = " + env);
	console.log("iteration = " + iteration);
	console.log("enabledVal = " + enabledVal);
	
	var jsTreeCheckboxesData = [];
	
	for (var k = 0; k < elements.length; k++) {
		console.log("Building jstree-div-" + env.toLowerCase() + "-" + elements[k].serverType + "-host-" + elements[k].shortText + "-" + iteration + " checkbox");

		jsTreeCheckboxesData.push({
			"id"		: "jstree-div-" + env.toLowerCase() + "-" + elements[k].serverType + "-host-" + elements[k].shortText + "-" + iteration,
			"text"		: elements[k].displayText,
			"state" 	: {
							opened 		: false,
					    	disabled	: enabledVal,
					    	selected	: false
						}	    							
		}); 
	
	} // end for

	return jsTreeCheckboxesData;
}


function showHelpDialog(trigger) {
	if (trigger == directive_download_timeframe) {
		$('#dialog-help-download-timeframe').dialog({
			resizable: false,
			modal: true			
		});
	} else 	if (trigger == directive_search_timeframe) {
		$('#dialog-help-search-timeframe').dialog({
			resizable: false,
			modal: true			
		});
	}

}

function parseDates(dates) {
	var date1Str = dates.toString();
	console.log("Received dates: " + date1Str);
	var res = date1Str.replace(",","-");
	console.log("Split dates: " + res);
	
	var fromDate = res.slice(0,res.indexOf("-"));
	var toDate = res.slice(res.indexOf("-")+1, res.length);
	
	console.log("Comparing " + fromDate + "(fromDate) with " + toDate + "(toDate)");
	var diffInDateRange = compareDates(fromDate, toDate);

	console.log("Comparing " + today.toString() + "(today) with " + fromDate + "(fromDate)");
	var diffWithStartDate = compareDates(today, fromDate);
	
	console.log("Comparing " + today.toString() + "(today) with " + toDate + "(toDate)");
	var diffWithEndDate = compareDates(today, toDate);

	
	if (diffInDateRange < limit_timeframe) {
		displayMessage("You have selected a date range too large.", getEarlyDateMsg());
	} else if (diffWithStartDate > Math.abs(limit_timeframe)+1) {
			displayMessage("Your start date is too far back.", getEarlyDateMsg());
	} else if (diffWithEndDate < 0) {
		displayMessage("You have picked a future date, which is invalid.", getEarlyDateMsg());
	}
	
	return res;
}

function compareDates(date1, date2) {

	if (typeof date1 === "string") {
		dt1 = setDate(date1);
	} else {
		dt1 = date1;
	}
	
	var dt1Epoch = dt1.getTime();
	
	console.log("Date value in string for dt1: " + dt1.toString());
	console.log("Date value in Epoch time for dt1: " + dt1Epoch);
	
	console.log(typeof date2);
	if (typeof date2 === "string") {
		dt2 = setDate(date2);
	} else {
		dt2 = date2;
	}
	
	var dt2Epoch = dt2.getTime();
	
	console.log("Date value in string for dt2: " + dt2.toString());
	console.log("Date value in Epoch time for dt2: " + dt2Epoch);

	console.log("Time diff between date1 and date2 is: " + (dt1Epoch - dt2Epoch)/1000/60/60/24);
	
	return (dt1Epoch - dt2Epoch)/1000/60/60/24;
	
}

function setDate(dateString) {
	console.log("string date: " + dateString);

	var year = dateString.slice(0,dateString.length/2);
	console.log("Year derived: " + year);

	var month = dateString.slice((dateString.length/2),(dateString.length/2)+2);
	console.log("Month derived: " + month);

	var day = dateString.slice((dateString.length/2)+2,dateString.length);
	console.log("Day derived: " + day);

	var dt = new Date(year + ' ' + month+ ' ' + day);
	return dt;
}

function initTimeframeLimit() {
	var dt1Epoch = today.getTime();
	
	var dt2Epoch = (today.getTime()-Math.abs(((limit_timeframe)*1000*60*60*24)));
	dateEarlyLimit = new Date(dt2Epoch);
	
	console.log("earliest in days: " + (dt1Epoch - dt2Epoch)/1000/60/60/24);
	
	dateEarlyLimitFormattedString = dateEarlyLimit.toString()
	dateEarlyLimitFormattedString  = dateEarlyLimitFormattedString.slice(0, dateEarlyLimitFormattedString.indexOf(":")-2);

	console.log("earliest date in string: " + dateEarlyLimitFormattedString);
}

function getEarlyDateMsg() {
	return "Please select a date between today and " + dateEarlyLimitFormattedString;

}

function deSelectAll(env, hosts, elements, selectedVal) {
	for (var i = 0; i < hosts.length; i++) {
		for (var j = 0; j < elements.length; j++) {			
			$('#jstree-div-' + env.toLowerCase() + '-' + elements[j].serverType + '-host-' + elements[j].shortText + "-" + (i+1)).jstree(selectedVal).deselect_all(false);
		} // end for with j
	} // end for with i

}

function selectAll(env, hosts, elements, selectedVal) {
	for (var i = 0; i < hosts.length; i++) {
		for (var j = 0; j < elements.length; j++) {
//			console.log("This is disabled: " + $('#jstree-div-' + env.toLowerCase() + '-' + elements[j].serverType + '-host-' + (i+1)).jstree().is_disabled($('#jstree-div-' + env.toLowerCase() + '-' + elements[j].serverType + '-host-' + elements[j].shortText + "-" + (i+1))));
			if (!$('#jstree-div-' + env.toLowerCase() + '-' + elements[j].serverType + '-host-' + (i+1)).jstree().is_disabled($('#jstree-div-' + env.toLowerCase() + '-' + elements[j].serverType + '-host-' + elements[j].shortText + "-" + (i+1)))) {
				$('#jstree-div-' + env.toLowerCase() + '-' + elements[j].serverType + '-host-' + elements[j].shortText + "-" + (i+1)).jstree(selectedVal).select_all(false);
			}				
		} // end for with j
	} // end for with i

}

function compileAllLogsToFetch(host, selectedFiles, elements, logsToFetch) {
	console.log("Inside compileAllLogsToFetch(host, selectedFiles, elements)");
	console.log("host = " + host);
	console.log("selectedFiles = " + selectedFiles);
	console.log("elements = " + elements);
	
	var logFiles = [];
	for (var j in selectedFiles) {
		console.log("Selected log type: >>" + selectedFiles[j].name + "<<");
		for (var k in elements) {
			console.log("Checking for: >>" + elements[k].displayText + "<<");
			if (selectedFiles[j].text === elements[k].displayText) {
				logFiles.push(elements[k].shortText);
				console.log(elements[k].displayText + " to fetch from " + host);
			} // end if
		} // end inner for k
	} // end inner for j
	logsToFetch.push({"Host" : host, "Logs" : logFiles});
}

