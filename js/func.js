var subString = "";
var redirectData = [];
var domNew = "";

function subStr() {
  subString = $('#oldUrl').val();
}

$('#oldUrl').change(subStr);
// Get source code of the URL
function getSourceAsDOM(url) {
  xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", url, false);
  parser = new DOMParser();
  try {
    xmlhttp.send();
  } catch (err) {
    domNew = "Error";
  }
  domNew = xmlhttp.responseText;
  return parser.parseFromString(xmlhttp.responseText, "text/html");
}

// Run the searching with button click
$("#proceed").click(function() {
  event.preventDefault();
  // read input values
  subString = $('#oldUrl').val();
  var newUrla = $("#newUrl").val();
  var download = $("#download").val();

  // read URLs and line by line save them as an object
  var newLines = $('#newUrl').val().split(/\n/);
  var newUrlResult = [];

  for (var j = 0; j < newLines.length; j++) {
    var newUrlString = newLines[j];
    getSourceAsDOM(newLines[j]);
    var isThere = domNew.search(subString);
    // If found, save the search phrase
    if (isThere !== -1) {
      redirectData.push({
        NewURL: newLines[j],
        SearchSubstring: subString
      });
    }
    // If URL doesn't work/exist, save "URL Error"
    else if (domNew == "") {
      redirectData.push({
        NewURL: newLines[j],
        SearchSubstring: "URL Error"
      });
    }
    // If not found, save "Not Found"
    else {
      redirectData.push({
        NewURL: newLines[j],
        SearchSubstring: "Not Found"
      });
    }
  }
  // Enable download button
  $("#download").removeClass("disabled");
  $("#download").removeClass("btn-danger");
  $("#download").addClass("btn-primary");
  // Disable proceed button
  $("#proceed").addClass("disabled");
  $("#proceed").addClass("btn-danger");
});

/* Download as CSV script from https://halistechnology.com/2015/05/28/use-javascript-to-export-your-data-as-csv/ */

// Convert Objects to CSV
function convertArrayOfObjectsToCSV(args) {
  var result, ctr, keys, columnDelimiter, lineDelimiter, data;

  data = args.data || null;
  if (data == null || !data.length) {
    return null;
  }

  columnDelimiter = args.columnDelimiter || ',';
  lineDelimiter = args.lineDelimiter || '\n';

  keys = Object.keys(data[0]);

  result = '';
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  data.forEach(function(item) {
    ctr = 0;
    keys.forEach(function(key) {
      if (ctr > 0) result += columnDelimiter;

      result += item[key];
      ctr++;
    });
    result += lineDelimiter;
  });

  return result;
}

// Download as CSV
function downloadCSV(args) {
  var data, filename, link;

  var csv = convertArrayOfObjectsToCSV({
    data: redirectData
  });
  if (csv == null) return;

  filename = 'crawler-export.csv';

  if (!csv.match(/^data:text\/csv/i)) {
    csv = 'data:text/csv;charset=utf-8,' + csv;
  }
  data = encodeURI(csv);

  link = document.createElement('a');
  link.setAttribute('href', data);
  link.setAttribute('download', filename);
  link.click();
}
