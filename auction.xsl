<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">    
 <xsl:output method="html"/>  
 <xsl:template match="/">    
 <HTML>        
 <HEAD>     
    <link rel="stylesheet" type="text/css" href="list.css"/>
 </HEAD>   
 <BODY>   
<h1>The List of Sold Items</h1>
<table border="1" id="sold" class="items">
    <tr>
      <th>Customer ID</th>
      <th>Item ID</th>
	   <th>Item Name</th>
      <th>Category</th>
	   <th>Starting Price</th>
      <th>Reserve Price</th>
	   <th>Buy It Now Price</th>
      <th>Bid Price</th>
	   <th>Duration</th>
      <th>Status</th>
	   <th>Current Date</th>
      <th>Current Time</th>
	  <th>Bidder ID</th>
	  <th>Remove</th>
    </tr>
  <xsl:for-each select="items/item">
	<xsl:if test="status='sold'">
	
	
	<tr>
      <td><xsl:value-of select="customerID"/></td>
      <td><xsl:value-of select="itemID"/></td>
	   <td><xsl:value-of select="itemName"/></td>
      <td><xsl:value-of select="category"/></td>
	   <td><xsl:value-of select="startingPrice"/></td>
      <td><xsl:value-of select="reservePrice"/></td>
	   <td><xsl:value-of select="buyItNowPrice"/></td>
      <td><xsl:value-of select="bidPrice"/></td>
	   <td><xsl:value-of select="duration"/></td>
      <td><xsl:value-of select="status"/></td>
	   <td><xsl:value-of select="currentDate"/></td>
      <td><xsl:value-of select="currentTime"/></td>
	   <td><xsl:value-of select="bidderID"/></td>
	   <td>Remove</td>
	   
    </tr>
</xsl:if>
</xsl:for-each>
</table>
<br/>
<p class="total">Total Number of Sold Items: <xsl:value-of select="count(items/item[status='sold'])"/></p>
<xsl:variable name="sold" select="sum(items/item[status='sold']/bidPrice)"/>

<p class="total">Total revenue for Sold Items:<xsl:value-of select="$sold*0.03"/></p>
<br/>
<br/>
<h1>The List of Fail Items</h1>
<table border="1" id="fail" class="items">
    <tr>
      <th>Customer ID</th>
      <th>Item ID</th>
	   <th>Item Name</th>
      <th>Category</th>
	   <th>Starting Price</th>
      <th>Reserve Price</th>
	   <th>Buy It Now Price</th>
      <th>Bid Price</th>
	   <th>Duration</th>
      <th>Status</th>
	   <th>Current Date</th>
      <th>Current Time</th>
	  <th>Bidder ID</th>
    </tr>

<xsl:for-each select="items/item">
	<xsl:if test="status='fail'">
	
	
	<tr>
      <td><xsl:value-of select="customerID"/></td>
      <td><xsl:value-of select="itemID"/></td>
	   <td><xsl:value-of select="itemName"/></td>
      <td><xsl:value-of select="category"/></td>
	   <td><xsl:value-of select="startingPrice"/></td>
      <td><xsl:value-of select="reservePrice"/></td>
	   <td><xsl:value-of select="buyItNowPrice"/></td>
      <td><xsl:value-of select="bidPrice"/></td>
	   <td><xsl:value-of select="duration"/></td>
      <td><xsl:value-of select="status"/></td>
	   <td><xsl:value-of select="currentDate"/></td>
      <td><xsl:value-of select="currentTime"/></td>
	   <td><xsl:value-of select="bidderID"/></td>
	   
    </tr>
</xsl:if>
</xsl:for-each>
</table>
<br/>
<p class="total">Total Number of Fail Items: <xsl:value-of select="count(items/item[status='fail'])"/></p>
<xsl:variable name="fail" select="sum(items/item[status='fail']/reservePrice)"/>

<p class="total">Total revenue for Fail Items:<xsl:value-of select="$fail*0.01"/></p>








 
 </BODY>    
 </HTML>  
 </xsl:template>
 </xsl:stylesheet> 