function wstxSubmitForm(submitBtn)
{
	if (!submitBtn || !submitBtn.form)
		return;

	submitBtn.disabled = true;

	var msg = "Please enter a value for each of the following required fields:  \n";
	var firstMissingFld = null;

	for (var i = 0; i < submitBtn.form.length; i++)
	{
		var elm = submitBtn.form.elements[i];
		var required = elm.getAttribute("required");
		if (!required || (required.toLowerCase() != "true"))
			continue;

		var hasValue = true;
		switch (elm.type.toLowerCase())
		{
			case "text":
			case "textarea":
				if (_trim(elm.value).length == 0)
					hasValue = false;
				break;
			case "select-one":
			case "select-multiple":
				if (elm.selectedIndex < 0)
					hasValue = false;
				break;
		}

		if (!hasValue)
		{
			msg += ('\n    ' + elm.name);
			if (!firstMissingFld)
				firstMissingFld = elm;
		}
	}

	if (!firstMissingFld)
		submitBtn.form.submit();
	else
	{
		alert(msg);
		_select(firstMissingFld);
		submitBtn.disabled = false;
	}

	return !firstMissingFld;

	function _trim(str) { return str.replace(/^\s*|\s*$/g, ''); }

	function _select(elm)
	{
		elm.focus();
		if (elm.type=="text" || elm.type=="textarea")
			elm.select();
	}
}