
const clientmodel=require('./models/Client')
const leadmodel=require('./models/Lead')
const followupmodel=require('./models/Followup')
const mobilemodel=require('./models/Mobile')
const emailmodel=require('./models/Email')
const alumnimodel=require('./models/Alumni')
const interestmodel=require('./models/Interest');
const productmodel = require("./models/Product");
const relation=()=>{
// // Relations between leads and client
clientmodel.hasMany(leadmodel,{foreignKey: 'ClientID', foreignKeyConstraint: true})
// //-----------------------------------

// // Relation between client and product
clientmodel.hasMany(productmodel,{foreignKey: 'ClientID', foreignKeyConstraint: true})
// //-------------------------------------

// // Relation between lead and interested 
leadmodel.hasMany(interestmodel,{foreignKey:'LeadID' , ForeignKeyConstraint: true})
// //--------------------------------------

// // Relation between client and interest
clientmodel.hasMany(interestmodel,{foreignKey: 'ClientID', ForeignKeyConstraint: true})
// // ---------------------------------------

// // Relation between Product and Interest
productmodel.hasMany(interestmodel,{foreignKey:'ProdID',foreignKeyConstraint:true})
// // --------------------------------------

// // relation between Lead and mobile
leadmodel.hasOne(mobilemodel,{foreignKey:'LeadID',foreignKeyConstraint:true})
// //----------------------------------------

// //relation between Lead and mobile
leadmodel.hasOne(emailmodel,{foreignKey:'LeadID',foreignKeyConstraint:true})
// //----------------------------------------

// // Relation between lead, client, Product and Alumni
leadmodel.hasOne(alumnimodel,{foreignKey:'LeadID',foreignKeyConstraint:true})
clientmodel.hasOne(alumnimodel,{foreignKey:'ClientID',foreignKeyConstraint:true})
productmodel.hasOne(alumnimodel,{foreignKey:'ProdID',foreignKeyConstraint:true})
// // -----------------------------------------------------

// // relation betweeen lead and followup
leadmodel.hasMany(followupmodel,{foreignKey:"LeadID",foreignKeyConstraint:true})
// -----------------------------------------------------
}

module.exports={relation};