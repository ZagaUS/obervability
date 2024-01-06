function SubmitForm(){
    var user = {
        name: $("#name").val(),
        phoneNo: $("#phoneNo").val(),
        location: $("#location").val(),
        role: $("#role").val(),
        department: $("#department").val(),
        workPhone: $("#workPhone").val(),
        // address: $("#address").val(),
        companyEmail: $("#companyEmail").val(),
        companyName: $("#companyName").val(),

    };

    // private Long phoneNo;
    // private String companyEmail;
    // private String companyName;
    // private String location;
    // private String role;
    // private String department;
    // private Long workPhone;
    // // private String address;
    // private String username;
    // private String password;
    // private LocalDate todayDate;
    // private LocalDate expiryDate;

    $.ajax({
        type: "POST",
        url: "https://trialuser-management-testing-space.apps.zagaopenshift.zagaopensource.com/trialuser/create", // Replace with the actual server endpoint
        headers: {
            "Content-Type": "application/json",
        },
        data: JSON.stringify(user),
        success: function (response) {
            // console.log("User registered successfully:", response);
            // console.log(JSON.stringify(response));
            sendMailRegistration(response.name,response.username,response.password,response.companyEmail,response.expiryDate)
            // Handle success, e.g., display a success message to the user
            // alert("user registered successfully")
            // window.location.href = "trial.html";
            swal({
                title: "WOW!",
                text: "Registration succefully done!",
                type: "success"
            }).then(okay => {
                // if(okay){
                //     window.location.href = "trial.html";
                // }
            })
        },
        error: function (error) {
            console.error("Error registering user:", error);
            swal({
                title: "Failed",
                text: " User Already Existed",
                type: "error"
            }).then(okay => {
                if(okay){
                    window.location.href = "trial.html";
                }
            })
            // Handle error, e.g., display an error message to the user
        }
    })
    // .done(function (msg) {
    //     window.location.href = "trial.html";
    // })
    
}

function navigatePage() {
    window.location.href = "trial.html";
}



function sendMailRegistration(name,username,password,emailID,expiryDate) {

    Email.send({
        SecureToken : "9f4c4f41-276b-4c7d-bc20-1c28be67816d",
        To : emailID,
        From : "surendhar030298@gmail.com",
        Subject : "Regarding Virtual Machine",
        Body : `<!DOCTYPE html>
        <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="x-apple-disable-message-reformatting">
                <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no">
        
                <meta name="color-scheme" content="light">
                <meta name="supported-color-schemes" content="light">
        
                
                <!--[if !mso]><!-->
                  
                  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap">
                  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap">
        
                  <style type="text/css">
                  // TODO: fix me!
                    @import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap);
                </style>
                
                <!--<![endif]-->
        
                <!--[if mso]>
                  <style>
                      // TODO: fix me!
                      * {
                          font-family: sans-serif !important;
                      }
                  </style>
                <![endif]-->
            
                
                <!-- NOTE: the title is processed in the backend during the campaign dispatch -->
                <title></title>
        
                <!--[if gte mso 9]>
                <xml>
                    <o:OfficeDocumentSettings>
                        <o:AllowPNG/>
                        <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                </xml>
                <![endif]-->
                
            <style>
                :root {
                    color-scheme: light;
                    supported-color-schemes: light;
                }
        
                html,
                body {
                    margin: 0 auto !important;
                    padding: 0 !important;
                    height: 100% !important;
                    width: 100% !important;
        
                    overflow-wrap: break-word;
                    -ms-word-break: break-all;
                    -ms-word-break: break-word;
                    word-break: break-all;
                    word-break: break-word;
                }
        
        
                
          direction: undefined;
          center,
          #body_table {
            
          }
        
          ul, ol {
            padding: 0;
            margin-top: 0;
            margin-bottom: 0;
          }
        
          li {
            margin-bottom: 0;
          }
        
          
        
          .list-block-list-outside-left li {
            margin-left: 20px !important;
          }
        
          .list-block-list-outside-right li {
            margin-right: 20px !important;
          }
        
          
            .paragraph {
              font-size: 15px;
              font-family: Open Sans, sans-serif;
              font-weight: normal;
              font-style: normal;
              text-align: start;
              line-height: 1;
              text-decoration: none;
              color: #5f5f5f;
              
            }
          
        
            .heading1 {
              font-size: 32px;
              font-family: Open Sans, sans-serif;
              font-weight: normal;
              font-style: normal;
              text-align: start;
              line-height: 1;
              text-decoration: none;
              color: #000000;
              
            }
          
        
            .heading2 {
              font-size: 26px;
              font-family: Open Sans, sans-serif;
              font-weight: normal;
              font-style: normal;
              text-align: start;
              line-height: 1;
              text-decoration: none;
              color: #000000;
              
            }
          
        
            .heading3 {
              font-size: 19px;
              font-family: Open Sans, sans-serif;
              font-weight: normal;
              font-style: normal;
              text-align: start;
              line-height: 1;
              text-decoration: none;
              color: #000000;
              
            }
          
        
            .list {
              font-size: 15px;
              font-family: Open Sans, sans-serif;
              font-weight: normal;
              font-style: normal;
              text-align: start;
              line-height: 1;
              text-decoration: none;
              color: #5f5f5f;
              
            }
          
        
          p a, 
          li a {
            
          display: inline-block;  
            color: #5457FF;
            text-decoration: none;
            font-style: normal;
            font-weight: normal;
        
          }
        
          .button-table a {
            text-decoration: none;
            font-style: normal;
            font-weight: normal;
          }
        
          .paragraph > span {text-decoration: none;}.heading1 > span {text-decoration: none;}.heading2 > span {text-decoration: none;}.heading3 > span {text-decoration: none;}.list > span {text-decoration: none;}
        
        
                * {
                    -ms-text-size-adjust: 100%;
                    -webkit-text-size-adjust: 100%;
                }
        
                div[style*="margin: 16px 0"] {
                    margin: 0 !important;
                }
        
                #MessageViewBody,
                #MessageWebViewDiv {
                    width: 100% !important;
                }
        
                table {
                    border-collapse: collapse;
                    border-spacing: 0;
                    mso-table-lspace: 0pt !important;
                    mso-table-rspace: 0pt !important;
                }
                table:not(.button-table) {
                    border-spacing: 0 !important;
                    border-collapse: collapse !important;
                    table-layout: fixed !important;
                    margin: 0 auto !important;
                }
        
                th {
                    font-weight: normal;
                }
        
                tr td p {
                    margin: 0;
                }
        
                img {
                    -ms-interpolation-mode: bicubic;
                }
        
                a[x-apple-data-detectors],
        
                .unstyle-auto-detected-links a,
                .aBn {
                    border-bottom: 0 !important;
                    cursor: default !important;
                    color: inherit !important;
                    text-decoration: none !important;
                    font-size: inherit !important;
                    font-family: inherit !important;
                    font-weight: inherit !important;
                    line-height: inherit !important;
                }
        
                .im {
                    color: inherit !important;
                }
        
                .a6S {
                    display: none !important;
                    opacity: 0.01 !important;
                }
        
                img.g-img+div {
                    display: none !important;
                }
        
                @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
                    u~div .contentMainTable {
                        min-width: 320px !important;
                    }
                }
        
                @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
                    u~div .contentMainTable {
                        min-width: 375px !important;
                    }
                }
        
                @media only screen and (min-device-width: 414px) {
                    u~div .contentMainTable {
                        min-width: 414px !important;
                    }
                }
            </style>
        
            <style>
                @media only screen and (max-device-width: 640px) {
                    .contentMainTable {
                        width: 100% !important;
                        margin: auto !important;
                    }
                    .single-column {
                        width: 100% !important;
                        margin: auto !important;
                    }
                    .multi-column {
                        width: 100% !important;
                        margin: auto !important;
                    }
                    .imageBlockWrapper {
                        width: 100% !important;
                        margin: auto !important;
                    }
                }
                @media only screen and (max-width: 640px) {
                    .contentMainTable {
                        width: 100% !important;
                        margin: auto !important;
                    }
                    .single-column {
                        width: 100% !important;
                        margin: auto !important;
                    }
                    .multi-column {
                        width: 100% !important;
                        margin: auto !important;
                    }
                    .imageBlockWrapper {
                        width: 100% !important;
                        margin: auto !important;
                    }
                }
            </style>
            <style></style>
            
        <!--[if mso | IE]>
            <style>
                .list-block-outlook-outside-left {
                    margin-left: -18px;
                }
            
                .list-block-outlook-outside-right {
                    margin-right: -18px;
                }
        
                a:link, span.MsoHyperlink {
                    mso-style-priority:99;
                    
          display: inline-block;  
            color: #5457FF;
            text-decoration: none;
            font-style: normal;
            font-weight: normal;
        
                }
            </style>
        <![endif]-->
        
        
            </head>
        
            <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #F5F6F8;">
                <center role="article" aria-roledescription="email" lang="en" style="width: 100%; background-color: #F5F6F8;">
                    <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" id="body_table" style="background-color: #F5F6F8;">
                    <tbody>    
                        <tr>
                            <td>
                            <![endif]-->
                                <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="640" style="margin: auto;" class="contentMainTable">
                                    <tr class="wp-block-editor-spacerblock-v1"><td style="background-color:#F5F6F8;line-height:50px;font-size:50px;width:100%;min-width:100%">&nbsp;</td></tr><tr class="wp-block-editor-headingblock-v1"><td valign="top" style="background-color:#ffffff;display:block;padding-top:64px;padding-right:32px;padding-bottom:32px;padding-left:32px;text-align:center"><p style="font-family:Open Sans, sans-serif;text-align:center;line-height:36.80px;font-size:32px;background-color:#ffffff;color:#000000;margin:0;word-break:normal" class="heading1">Thanks for choosing us</p></td></tr><tr class="wp-block-editor-paragraphblock-v1"><td valign="top" style="padding:0px 32px 32px 32px;background-color:#ffffff"><p class="paragraph" style="font-family:Open Sans, sans-serif;text-align:left;line-height:30.00px;font-size:15px;margin:0;color:#5f5f5f;word-break:normal">Name: ${name}<br>Username: ${username}<br>Password: ${password}<br>Expiry date: ${expiryDate}</p></td></tr><tr><td style="padding-top:20px;padding-left:0;padding-right:0;padding-bottom:20px;background-color:#FFFFFF"><table role="presentation" class="multi-column" style="width:640px;border-collapse:collapse !important" cellpadding="0" cellspacing="0"><tbody><tr style="padding-top:20px;padding-left:0;padding-right:0;padding-bottom:20px" class="wp-block-editor-onecolumnsblock-v1"><td style="width:640px;float:left" class="wp-block-editor-column single-column"><table role="presentation" align="left" border="0" class="single-column" width="640" style="width:640px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0"><tbody><tr class="wp-block-editor-buttonblock-v1" align="center"><td style="background-color:#FFFFFF;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;width:100%" valign="top"><table role="presentation" cellspacing="0" cellpadding="0" class="button-table"><tbody><tr><td valign="top" class="button-td button-td-primary" style="cursor:pointer;border:none;border-radius:4px;background-color:#5457ff;font-size:16px;font-family:Open Sans, sans-serif;width:fit-content;letter-spacing:0;color:#ffffff"><a style="color:#ffffff" href="https://zaga-observability.zagaopensource.com/">
            <table role="presentation">
            <tbody><tr>
              <!-- Top padding -->
              <td valign="top" colspan="3" height="16" style="height: 16px; line-height: 1px; padding: 0;">
                <span style="display: inline-block;">&nbsp;</span>
              </td>
            </tr>
            <tr>
              <!-- Left padding -->
              <td valign="top" width="24" style="width: 24px; line-height: 1px; padding: 0;">
                <span style="display: inline-block;">&nbsp;</span>
              </td>
              <!-- Content -->
              <td valign="top" style="
                display: inline-block;
                cursor: pointer; border: none; border-radius: 4px; background-color: #5457ff; font-size: 16; font-family: Open Sans, sans-serif; width: fit-content; font-weight: null; letter-spacing: 0;
                  color: #ffffff;
                  padding: 0;
                ">
                ZAGA Opensource
              </td>
              <!-- Right padding -->
              <td valign="top" width="24" style="width: 24px; line-height: 1px; padding: 0;">
                <span style="display: inline-block;">&nbsp;</span>
              </td>
            </tr>
            <!-- Bottom padding -->
            <tr>
              <td valign="top" colspan="3" height="16" style="height: 16px; line-height: 1px; padding: 0;">
                <span style="display: inline-block;">&nbsp;</span>
              </td>
            </tr>
          </tbody></table>
            </a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td valign="top" align="center" style="padding:20px 20px 20px 20px;background-color:#F5F6F8"><p aria-label="Unsubscribe" class="paragraph" style="font-family:Open Sans, sans-serif;text-align:center;line-height:22.00px;font-size:11px;margin:0;color:#5f5f5f;word-break:normal">contact info : admin@zagaopensource.com</p></td></tr>
                                </table>
                            <!--[if mso | IE]>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                    <![endif]-->
                </center>
            </body>
        </html>`
        });

}