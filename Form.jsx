import React,  { useState } from 'react';
//import 'date-fns';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {TextField, InputLabel,Grid, Paper, FormControl} from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button'; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function App(props) {
  const { children, value, index, ...other } = props;
  return (
    <div className="App"
     // role="App"
      hidden={value !== index}
      id={`Client-${index}`}
      aria-labelledby={`Client-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `Client-${index}`,
    'aria-controls': `Client-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    //margin: theme.spacing(1),
    minWidth: 200,
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 1000,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 17, 3),
  },

}));

 export default function ClientProfile(props) {

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [customerName, setcustomerName] =useState("");
  const [customerId, setcustomerId] =useState("");
  // const [SubSegment, setSegment] =useState("");
  const [regAddress1, setregAddress1] =useState("");
  const [regAddress2, setregAddress2] =useState("");
  const [regAddress3, setregAddress3] =useState("");
  const [estabCountry, setestabCountry] =useState("");
  const [addressOps, setaddressOps] =useState("");
  const [countryOps, setcountryOps] = useState("");
  const [dateEstab, setdateEstab] =useState("");
  const [isicCode, setisicCode] =useState("");
  const [clientType, setclientType] =useState("");
  const [clientSubType, setclientSubType] =useState("");
  const [customerdeclar, setcustomerdeclar] =useState("");
  const [isNewCustomer, setisNewCustomer] = useState("");
  const [nextReviewDate, setnextReviewDate] =useState("");
  const [nationality, setnationality] = useState("");
  const [isUnregulated, setisUnregulated] = useState("");
  const [systemRisk,  setsystemRisk] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState(""); 
  const [isPEP, setisPEP] = useState("");
  const [isArmBusiness, setisArmBusiness] = useState("");
  const [identification_no, setidentification_no] = useState("");
  const [dob, setdob] = useState("");
  const [association_type, setassociation_type] = useState("");
  const [risk_rating, setrisk_rating] = useState("");
  const [comments,setcomments]=useState("");

 

  const handleChange = (event) => {
    const sourceElement = event.target.name;
    if (sourceElement === "customerName") setcustomerName(event.target.value);
    if (sourceElement === "customerId") setcustomerId(event.target.value);
    // if (sourceElement === "SubSegment") setSegment(event.target.value);
    if (sourceElement === "regAddress1") setregAddress1(event.target.value);
    if (sourceElement === "regAddress2") setregAddress2(event.target.value);
    if (sourceElement === "regAddress3") setregAddress3(event.target.value);
    if (sourceElement === "estabCountry") setestabCountry(event.target.value);
    if (sourceElement === "addressOps") setaddressOps(event.target.value);
    if (sourceElement === "countryOps") setcountryOps(event.target.value);
    if (sourceElement === "dateEstab") setdateEstab(event.target.value);
    if (sourceElement === "isicCode") setisicCode(event.target.value);
    if (sourceElement === "clientType") setclientType(event.target.value);  
    if (sourceElement === "clientSubType") setclientSubType(event.target.value);
    if (sourceElement === "customerdeclar") setcustomerdeclar(event.target.value);
    if (sourceElement === "nextReviewDate") setnextReviewDate(event.target.value);
    if (sourceElement === "isNewCustomer") setisNewCustomer(event.target.value); 
    if (sourceElement === "nationality") setnationality(event.target.value);
    if (sourceElement === "isUnregulated") setisUnregulated(event.target.value);
    if (sourceElement === "systemRisk") setsystemRisk(event.target.value);
    if (sourceElement === "firstName") setfirstName(event.target.value);
    if (sourceElement === "lastName") setlastName(event.target.value);  
    if (sourceElement === "isPEP") setisPEP(event.target.value);
    if (sourceElement === "isArmBusiness") setisArmBusiness(event.target.value); 
    if (sourceElement === "identification_no") setidentification_no(event.target.value);
    if (sourceElement === "dob") setdob(event.target.value);
    if (sourceElement === "association_type") setassociation_type(event.target.value);
    if (sourceElement === "risk_rating") setrisk_rating(event.target.value);
    if (sourceElement === "comments") setcomments(event.target.value);

  };

  const handlesubmit = (event, newValue) => {
    setValue(newValue);
  };  
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleSave=async(event)=>{
      event.preventDefault();
      
      const client={
        customerName:customerName,
        customerId:customerId,
        riskRating:risk_rating,
        regAddress1:regAddress1,
        regAddress2:regAddress2,
        regAddress3:regAddress3,
        estabCountry:estabCountry,
        addressOps:addressOps,
        countryOps:countryOps,
        dateEstab:dateEstab,
        isicCode:isicCode,
        clientType:clientType,
        clientSubType:clientSubType,
        customerdeclar: customerdeclar,
        nextReviewDate:nextReviewDate,
        isNewCustomer:isNewCustomer,
        isPEP:isPEP,
        isArmBusiness:isArmBusiness,
        isUnregulated:isUnregulated,
        systemRisk:systemRisk,
        comments:comments,
        firstName:firstName,
        lastName:lastName,
        associationType:association_type,
        dob:dob,
        nationality:nationality,
        identificationNo:identification_no
      }
      console.log(client);

      const apiEndpoint="http://localhost:8084/maker/add";
      const response = await axios.post(apiEndpoint, client);
      if (response.status === 200) 
      {
        toast.success("Appliaction Submitted Successfully "+" CaseId : "+response.data);
        setTimeout(()=>{
          window.location.href=`/Maker`; }, 4000);
      }

  }
  const [selected, setSelected] = React.useState("");
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
    const sourceElement = event.target.name;
    if (sourceElement === "clientType") setclientType(event.target.value);
    if (sourceElement === "clientSubType") setclientSubType(event.target.value);
    
  };
  
  const SoleProprietorship= [
    "Sole Proprietorship"
  ];
  const Partnership = [        
  "General Partnership",
  "Limited Partnership"
];

  const PrivatelyOwnedCompany = [
    "Private Corporation",
    "Incorporated Business",
    "Unincorporated Business",
    "Limited Liability Partnership"  
  ];

  const PubliclyListedCompany = [        
    "PLC on a Regulated Market, with at least 25% of its equity available to public",
    "Majority-Owned and Consolidated Subsidiary of PLC on a regulated market",
    "PLC on a Regulated Market but with less than 25% of its equity available to the public",
    "PLC on a non-Regulated Market"
  ];

  const GovernmentOffices = [        
    "Government Offices (e.g. Ministry, Department, Agency, etc)",
    "Public Sector Body",
    "Statutory Corporation",
    "Supra-national and Development Organisations"
    
  ];

  const GovernmentOwnedEntities = [        
    "Sovereign Wealth Funds",
    "Central Banks",
    "Regional Development Banks",
    "More than 50% owned by a Government",
    "50% or less owned by a Government"     
  ];

  const FinancialInstitution = [        
    "Financial Institution regulated in an Equivalent Low Risk Jurisdiction",
    "Financial Institution regulated in a non-Equivalent Low Risk Jurisdiction",
    "Unregulated Financial Institutions   "     
  ];

  const NGOCharityorReligiousOrganisation  = [        
    "Non-Government Organisation (NGO)",
    "Charity",
    "Religious Organisation/ Places of worship"
       
  ];

  const CluborSociety  = [        
    "Club",
    "Society"
       
  ];

  const TrustFoundationorsimilarentity  = [        
   "Trust",
    "Foundation",
    "Other similar entity"
       
  ];

  const PersonalInvestmentVehicle  = [        
    "Personal Investment Company",
    "Personal Investment Vehicles"
    
   ];

  let type = null;

  /** This will be used to create set of options that user will see */
  let MenuItems = null;
  
  /** Setting Type variable according to dropdown */
  if (selected === "Sole Proprietorship") {
    type = SoleProprietorship;
  } else if (selected === "Partnership") {
    type = Partnership;
  } else if (selected === "Privately Owned Company") {
    type = PrivatelyOwnedCompany;
  } else if (selected === "Publicly Listed Company (PLC)") {
    type = PubliclyListedCompany;
  } else if (selected === "Government Offices") {
    type = GovernmentOffices;
  } else if (selected === "Government-Owned Entities") {
    type = GovernmentOwnedEntities;
  } else if (selected === "Financial Institution") {
    type = FinancialInstitution;
  } else if (selected === "NGO, Charity or Religious Organisation") {
    type = NGOCharityorReligiousOrganisation;
  } else if (selected === "Club or Society") {
    type = CluborSociety;
  } else if (selected === "Trust, Foundation or similar entity") {
    type = TrustFoundationorsimilarentity;
  } else if (selected === "Personal Investment Vehicle") {
    type = PersonalInvestmentVehicle;
  }

  
  /** If "Type" is null or undefined then options will be null,
   * otherwise it will create a options iterable based on our array
   */
  if (type) {
    MenuItems = type.map((el) => <MenuItem key={el} value={el}>{el}</MenuItem>);
  }

  return (
    <Paper className={classes.paper}>
    <div className={classes.root}>

      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handlesubmit}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="add new client"
        >
          <Tab label="Customer Information" {...a11yProps(0)} />
          <Tab label="Risk Rating" {...a11yProps(1)} />
          <Tab label="Related Parties/Connected Parties" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      {/* Customer Information  */}

      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <App value={value} index={0} dir={theme.direction}>
        <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
        <TextField 
        id="customerName" 
        name="customerName"
        onChange={handleChange}
        value={customerName}
        required
        label="Customer Name"/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField 
        id="customerId" 
        name="customerId"
        onChange={handleChange}
        value={customerId}
        label="Customer Id" />
        </Grid>
        <Grid item xs={12}>
        <label>Registered Address</label>
        </Grid>
        <Grid item xs={12}>
        <TextField 
        id="regAddress1" 
        name="regAddress1"
        onChange={handleChange}
        value={regAddress1}
        required
        label="Address Line 1" fullWidth/>
        </Grid>
        <Grid item xs={12}>
        <TextField 
         id="regAddress2" 
         name="regAddress2"
         onChange={handleChange}
         value={regAddress2}
         required
        label="Address Line 2" fullWidth/>
        </Grid>
        <Grid item xs={12}>
        <TextField 
         id="regAddress3" 
         name="regAddress3"
         onChange={handleChange}
         value={regAddress3}
         required
        label="Address Line 3" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="estabCountry" required>Country of Establishment</InputLabel>
                  <Select
                    id="estabCountry"
                    name="estabCountry"
                    onChange={handleChange}
                    value={estabCountry}
                  >
                    <MenuItem value={"India"}>India</MenuItem>
                    <MenuItem value={"Singapore"}>Singapore</MenuItem>
                    <MenuItem value={"Hong Kong"}>Hong Kong</MenuItem>
                    <MenuItem value={"United Kingdom"}>United Kingdom</MenuItem>
                    <MenuItem value={"UAE"}>UAE</MenuItem>
                    <MenuItem value={"Jersey"}>Jersey</MenuItem>
        </Select>
        </FormControl>
        </Grid>
       <Grid item xs={12}>
        <TextField 
         id="addressOps" 
         name="addressOps"
         onChange={handleChange}
         value={addressOps}
         required
        label="Address of Operation " fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="countryOps" required>Country of Operation</InputLabel>
                  <Select
                    id="countryOps"
                    name="countryOps"
                    label="countryOps"
                    onChange={handleChange}
                    value={countryOps}
                  >
                    <MenuItem value={"India"}>India</MenuItem>
                    <MenuItem value={"Singapore"}>Singapore</MenuItem>
                    <MenuItem value={"Hong Kong"}>Hong Kong</MenuItem>
                    <MenuItem value={"United Kingdom"}>United Kingdom</MenuItem>
                    <MenuItem value={"UAE"}>UAE</MenuItem>
                    <MenuItem value={"Jersey"}>Jersey</MenuItem>
        </Select>
        </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
         <TextField
          id="dateEstab"
          name="dateEstab"
          value={dateEstab}
          label="Date of Establishment"
          type="date"
          defaultValue="2021-09-20"
          onChange={handleChange}
          required
          InputLabelProps={{
          shrink: true,
             }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="isicCode" required>primary ISIC Code</InputLabel>
        <Select
         name="isicCode"
         value={isicCode}
         onChange={handleChange}
        >
          <MenuItem value={1111}>1111</MenuItem>
          <MenuItem value={1112}>1112</MenuItem>
          <MenuItem value={1113}>1113</MenuItem>
          <MenuItem value={1116}>1116</MenuItem>
          <MenuItem value={1114}>1114</MenuItem>
          <MenuItem value={1121}>1121</MenuItem>
          <MenuItem value={1117}>1117</MenuItem>
          <MenuItem value={1122}>1122</MenuItem>
        </Select>
        </FormControl>
        </Grid>
        
        <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="clientType" required>Client Entity Type</InputLabel>
        <Select
          id="clientType"
          name="clientType"
          value={clientType}
          onChange={changeSelectOptionHandler }
        >
          <MenuItem value={"Sole Proprietorship"}>Sole Proprietorship</MenuItem>
          <MenuItem value={"Partnership"}>Partnership</MenuItem>
          <MenuItem value={"Privately Owned Company"}>Privately Owned Company</MenuItem>
          <MenuItem value={"Publicly Listed Company (PLC)"}>Publicly Listed Company (PLC)</MenuItem>
          <MenuItem value={"Government Offices"}>Government Offices</MenuItem>
          <MenuItem value={"Government-Owned Entities"}>Government-Owned Entities</MenuItem>
          <MenuItem value={"Financial Institution"}>Financial Institution</MenuItem>
          <MenuItem value={"NGO, Charity or Religious Organisation"}>NGO, Charity or Religious Organisation</MenuItem>
          <MenuItem value={"Club or Society"}>Club or Society</MenuItem>
          <MenuItem value={"Trust, Foundation or similar entity"}>Trust, Foundation or similar entity</MenuItem>
          <MenuItem value={" Personal Investment Vehicle"}> Personal Investment Vehicle</MenuItem>
        </Select>
        </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="clientSubType" required>Client Entity Sub Type</InputLabel>
        <Select
          name="clientSubType"
          id="clientSubType"
          value={clientSubType}
          onChange={handleChange}>
          {
            MenuItems
          }

        </Select>
        </FormControl>
        </Grid>

        <Grid item xs={12}>
        <TextField id="customerdeclar"
        name="customerdeclar"
        value={customerdeclar}
        onChange={handleChange}
        required
        label="Customer Declaration"  multiline
        maxRows={4} fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
         <TextField
          id="nextReviewDate"
          name="nextReviewDate"
          value={nextReviewDate}
          label="Next Review Date"
          type="date"
          defaultValue="2017-05-24"
          onChange={handleChange}
          required
          InputLabelProps={{
          shrink: true,
             }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="isNewCustomer" required>New Customer</InputLabel>
        <Select
          labelId="isNewCustomer"
          id="isNewCustomer"
          name="isNewCustomer"
          value={isNewCustomer}
          onChange={handleChange}
        >
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
        </Select>
        </FormControl>
        </Grid>

         </Grid>
        </App>

        {/* Risk Rating */}

        <App value={value} index={1} dir={theme.direction}>
        <Grid item >
        <FormControl className={classes.formControl} style={{width:"100%"}}>
        <InputLabel id="isPEP " required>Is the entity PEP, Connected PEP or owned or controlled by a PEP?
         </InputLabel>
        <Select
          labelId="isPEP"
          id="isPEP"
          name="isPEP"
          value={isPEP}
          onChange={handleChange}
        >
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
        </Select>
        </FormControl>
        </Grid>
        <br></br>        
        <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl} style={{width:"200%"}}>
        <InputLabel id="isArmBusiness"required >Is the entity related to Arms business (this means related to arms businesses, not prohibited under the Defence Goods Policy)?
        </InputLabel>
        <Select
          labelId="isArmBusiness"
          id="isArmBusiness"
          name="isArmBusiness"
          value={isArmBusiness}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
        </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl} style={{width:"70%"}}>
        <InputLabel id="isUnregulated " required >Is the entity an Unregulated fund?</InputLabel>
        <Select
          labelId="isUnregulatedr"
          id="isUnregulated"
          name="isUnregulated"
          value={isUnregulated}
          onChange={handleChange}
        >
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
        </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl} style={{width:"70%"}}>
        <InputLabel id="risk_rating" required>Risk Rating</InputLabel>
        <Select
          labelId="risk_rating"
          id="risk_rating"
          name="risk_rating"
          value={risk_rating}
          onChange={handleChange}
        >
          <MenuItem value={"A"}>A</MenuItem>
          <MenuItem value={"B"}>B</MenuItem>
          <MenuItem value={"C"}>C</MenuItem>
        </Select>
        </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl} style={{width:"70%"}}>
        <InputLabel id="systemRisk" required>System Generated Risk</InputLabel>
        <Select
          labelId="systemRisk"
          id="systemRisk"
          name="systemRisk"
          value={systemRisk}
          onChange={handleChange}
        >
          <MenuItem value={"A"}>A</MenuItem>
          <MenuItem value={"B"}>B</MenuItem>
          <MenuItem value={"C"}>C</MenuItem>
        </Select>
        </FormControl>
        </Grid>

        <Button style={{marginLeft:"350px", marginTop: "20px"}}variant="contained" color="Primary">
             Calculate Risk Rating</Button> 



          <Grid item xs={12}>
          <TextField id="comments"
          label="Add Comments" 
          name="comments"
          value={comments}
          onChange={handleChange} multiline
          maxRows={4} fullWidth/>
           </Grid>

          <Button style={{marginLeft:"93%", marginTop: "70px"}}variant="contained" color="Primary">
             Next</Button> 
        </App>

        {/* Related parties/connected parties */}

        <App value={value} index={2} dir={theme.direction}>
        <Grid item xs={12} sm={11}>
        <TextField 
         id="firstName" 
         name="firstName"
         onChange={handleChange}
         value={firstName}
         required
        label="Fist Name / Corporate Name" fullWidth />
        </Grid>

        <Grid item xs={12} sm={11}>
        
        <TextField 
         id="lastName" 
         name="lastName"
         onChange={handleChange}
         value={lastName}
         required
        label="Last Name for individuals"  fullWidth />
        
        <br></br>
        <br></br>
        <Grid item xs={12} sm={6}>
         <TextField
            id="dob"
            name="dob"
          label="Date of Birth/Date of Incorporation"
            type="date"
            value={dob}
           defaultValue="2017-05-24"
           onChange={handleChange}
           required
         InputLabelProps={{
          shrink: true,
             }}
             style={{width:"50%"}}
            />
          </Grid>
        <Grid item xs={12} sm={6} >
        <FormControl className={classes.formControl} style={{width:"50%"}}>
        <InputLabel id="nationality " required>Nationality</InputLabel>
                  <Select
                    labelId="nationality"
                    id="nationality"
                    name="nationality"
                    label="nationality"
                    onChange={handleChange}
                    value={nationality }
                  >
                    <MenuItem value={"India"}>India</MenuItem>
                    <MenuItem value={"Singapore"}>Singapore</MenuItem>
                    <MenuItem value={"Hong Kong"}>Hong Kong</MenuItem>
                    <MenuItem value={"United Kingdom"}>United Kingdom</MenuItem>
                    <MenuItem value={"UAE"}>UAE</MenuItem>
                    <MenuItem value={"Jersey"}>Jersey</MenuItem>
        </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} > 
        <TextField id="identification_no" 
        name="identification_no" 
        value={identification_no} 
        label="Identification Number"
        onChange={handleChange} 
        required
        style={{width:"50%"}}/>
        </Grid>

        </Grid>
        <Grid item xs={12} sm={6} >
        <FormControl className={classes.formControl} style={{width:"50%"}}>
        <InputLabel id="association_type " required>Association Type</InputLabel>
                  <Select
                    labelId="association_type" 
                    id="association_type" 
                    name="association_type"
                    label="Association Type" 
                    onChange={handleChange}
                    value={association_type} 
                  >
                    <MenuItem value={"Approving Signatories"}>Approving Signatories</MenuItem>
                    <MenuItem value={"Authorised Signatories"}>Authorised Signatories</MenuItem>
                    <MenuItem value={"Authorised Signatory"}>Authorised Signatory</MenuItem>
                    <MenuItem value={"Beneficial Owner"}>Beneficial Owner</MenuItem>
                    <MenuItem value={"Beneficial Owners"}>Beneficial Owners</MenuItem>
                    <MenuItem value={"Jersey"}>Jersey</MenuItem>
        </Select>
        </FormControl>
        </Grid>
        

       {/* <Button style={{marginTop: "10px"}} style={{marginLeft:"350px", marginTop: "70px"}} variant="contained" color="Primary"  
        onClick={(event) => { alert('Are you sure you want to save this Client?') }}> Save</Button>  */}

        <Button style={{marginTop: "10px"}} style={{marginLeft:"500px", marginTop: "70px",backgroundColor:"green"}}variant="contained"   
        onClick={(event) => { handleSave(event) }}> Submit</Button>                       
       
       
       
        </App>
      </SwipeableViews>
    </div>
    </Paper>
  );
}
