
//Contracts & Agreements
var Agreement_Advisory = {
	Name: "Advisory Agreement",
	OptionsLabel: "What kind of help do you need with the advisory agreement?",
	Options: [
		{Name: "Draft a new agreement"}, {Name: "Review, revise or negotiate an existing agreement"}, {Name: "Resolve a dispute or a breach of contract"}, {Name: "Something else"}
		]
};
var Agreement_Affiliate = {
	Name: "Affiliate Agreement",
	OptionsLabel: "What kind of help do you need with the affiliate agreement?",
	Options: [
		{Name: "Draft a new agreement"}, {Name: "Review, revise or negotiate an existing agreement"}, {Name: "Resolve a dispute or a breach of contract"}, {Name: "Something else"}
		]
};
var Agreement_Asset = {
	Name: "Asset Purchase Agreement",
	OptionsLabel: "What kind of help do you need with the purchase agreement?",
	Options: [
		{Name: "Draft a new agreement"}, {Name: "Review, revise or negotiate an existing agreement"}, {Name: "Resolve a dispute or a breach of contract"}, {Name: "Something else"}
		]
};
var Agreement_Buyout = {
	Name: "Buyout Agreement",
	OptionsLabel: "What kind of help do you need with the buyout agreement?",
	Options: [
		{Name: "Draft a new agreement"}, {Name: "Review, revise or negotiate an existing agreement"}, {Name: "Something else"}
		]
};

var Agreement_Lease_Type = [{Name: "Hotel"}, {Name: "Industrial"}, {Name: "Land"}, {Name: "Multi-Family"}, {Name: "Office"}, {Name: "Retail"}, {Name: "Special Purpose"}, {Name: "Other"}];

var Agreement_Lease = {
	Name: "Commercial Lease",
	OptionsLabel: "What kind of assistance do you need with the commercial lease?",
	Options: [
		{Name: "Draft a new lease", Options: Agreement_Lease_Type}, 
		{Name: "Review, revise or negotiate an existing lease", Options: Agreement_Lease_Type}, 
		{Name: "Terminate an existing lease", Options: Agreement_Lease_Type}, 
		{Name: "Advise on breach of lease or other disputes", Options: Agreement_Lease_Type}, 
		{Name: "Something else"}
	]
};
var Agreement_Loan = {
	Name: "Commercial Loan"
};
var Agreements = {
		Name: "Contracts & Agreements", 
		Options: [Agreement_Advisory, Agreement_Asset, Agreement_Buyout, Agreement_Lease, Agreement_Loan]
	};

// Startup
var Startup_Formation_New = {
	Name: "Form a New Business",
	OptionsLabel: "Which type of business do you want to form?",
	Options: [
		{Name: "Corporation"},
		{Name: "Franchise"},
		{Name: "Joint Venture"},
		{Name: "LLC"},
		{Name: "Non-Profit"},
		{Name: "Partnership"},
		{Name: "Other Type of Entity"},
		{Name: "Not sure, or need a lawyer to help decide"}
	]
};
var Startup_Formation_Restructure = {
	Name: "Change or Restructure an Existing Business",
	OptionsLabel: "Which type of business change are you trying to make?",
	Options: [
		{Name: "Convert to a Different Legal Entity"},
		{Name: "Change the Company Name"},
		{Name: "Add or Remove Owners"},
		{Name: "Purchase, Split or Sell Shares"},
		{Name: "Incorporate in a Different State"},
		{Name: "Other Type of Change"},
		{Name: "Not Sure, or Need a Lawyer's Help Deciding"}
	]
};
var Startup_Formation = {
	Name: "Business Formation and Structure",
	OptionsLabel: "Which of the following best describes your business formation or structure legal need(s)?",
	Options: [Startup_Formation_New, Startup_Formation_Restructure]
};
var Startup_Contracts = {
	Name: "Contracts or Agreements",
	OptionsLabel: "Which agreements would you like to discuss with a lawyer?"
};
var Startup_Employment = {
	Name: "Employment",
	OptionsLabel: "Which of the following best describes your employment legal need(s)?"
};
var Startup_Trademark = {
	Name: "Trademark",
	OptionsLabel: "What type of trademark assistance do you need?"
};
var Startup_Patent = {
	Name: "Patent",
	OptionsLabel: "What type of patent assistance do you need?"
};
var Startup_Raising = {
	Name: "Raising Capital",
	OptionsLabel: "What type of assistance do you need with raising capital?"
};
var Startup_Else = {
	Name: "Something Else"
};
var Startup = {
	Name: "Startup",
	Options: [Startup_Formation, Startup_Contracts, Startup_Employment, Startup_Trademark, Startup_Patent, Startup_Raising, Startup_Else]
};

// Business Structure
var BusinessStructure = {
	Name: "Business Structure"
};
// Intellectual Property
var IntellectualProperty = {
	Name: "Intellectual Property"
};
// Immigration
var Immigration = {
	Name: "Immigration"
};
// Real Estate
var RealEstate = {
	Name: "Real Estate"
};

var Legal = {
	Name: "Legal",
	Options: [Startup, BusinessStructure, Agreements, IntellectualProperty, Immigration, RealEstate]
};

module.exports = Legal;
console.log("Exported Legal from categories.js");
