
	// converts num to Currency format
	// sets showDollarSign to true if you want a 
	// leading $, otherwise sets it to false
	function toCurrency(num, showDollarSign) {
		if(showDollarSign) {
			return "$" + roundFloat(num, 2)
		} else {
			return roundFloat(num, 2)
		}
	}
	
	// rounds a floating-point number to the
	// specified number of decimal places
	// returns the value in string format
	// to hold the decimal places if decimal
	// value is 0
	function roundFloat(num, decimalPlaces) {
		// convert num to a number if not already
		if (isNaN(num)) {
			num = parseFloat(num)
		}

		// multiply num by 10 to the x power, 
		// where x = number of decimalPlaces desired
		var temp = num * Math.pow(10, decimalPlaces)

		// now round to an integer to get rid of 
		// excess digits
		temp = Math.round(temp)

		//convert to a string
		temp = temp.toString()

		// pad numbers that are shorter than the number
		// of decimal points desired with leading zeros
		while (temp.length <= decimalPlaces) {
			temp = "0" + temp
		}

		// determine the index number where the decimal
		// point needs to be inserted and insert it
		var decNdx = temp.length - decimalPlaces
		temp = temp.substring(0, decNdx) + "." +
			   temp.substring(decNdx)
		return temp
	}
	
	// totals the order form
	function totalOrder(zForm) {
		var total = 0
		for (i=1; i<zForm.length-3; i+=2) {
			amt = parseFloat(zForm.elements[i].value)
			if (isNaN(amt)) {
				amt = 0
			}
			total += amt
		}
		zForm.Total.value = toCurrency(total, false)
	}

	// calculates the extended value and
	// updates the total
	function extend(zForm, itemID, price) {
		var itemQty = zForm[itemID + "qty"].value
		if (isNaN(itemQty)) {
			itemQty = parseFloat(itemQty)
		}
		if (isNaN(price)) {
			price = parseFloat(price)
		}
		var ext = itemQty * price
		
		zForm[itemID + "qty"].value = toCurrency(itemQty, false)
		zForm[itemID + "ext"].value = toCurrency(ext, false)
		totalOrder(zForm)
	}
