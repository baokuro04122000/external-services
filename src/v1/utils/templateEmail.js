var that = module.exports = {
  sendOTPConfirmEmail:(otp, name='there') => `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
          <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="format-detection" content="date=no"/>
          <meta name="format-detection" content="address=no"/>
          <meta name="format-detection" content="telephone=no"/>
          <meta name="x-apple-disable-message-reformatting"/>
  
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap" rel="stylesheet">
  
          <title>OTP Confirm Email</title>
      </head>
  
      <body style="margin: 0; padding: 0; font-family: 'Manrope', sans-serif; min-height: 100vh; background: #EBFAFA;">
          <center>
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background: #EBFAFA;">
                  <tr>
                      <td align="center">
                          <table width="690" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                  <td style="padding: 35px">
                                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                          <tr>
                                              <td style="text-align:center; padding: 42px 15px 16px;">
                                                  <a href="#" target="_blank">
                                                      <img src="https://yoda.hypeople.studio/yoda-email-template/images/logo/logo-fill.svg" border="0" alt="Logo"/>
                                                  </a>
                                              </td>
                                          </tr>
  
                                          <tr>
                                              <td style="font-size:20px; line-height:24px; font-weight: bold; color:#2D3436; min-width:auto !important; text-align:center; letter-spacing: -0.02em; padding-bottom: 42px;">
                                                  BTN Ecommerce
                                                  <br/>
                                                  OTP Confirm Email
                                              </td>
                                          </tr>
  
                                          <tr>
                                              <td style="border-radius: 8px;" bgcolor="#ffffff">
                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                      <tr>
                                                          <td style="font-size:14px; color:#0010F7; min-width:auto !important; padding: 32px;">
                                                             Confirm Your E-Mail Address 📮
                                                          </td>
                                                      </tr>
  
                                                      <tr>
                                                          <td style="font-size:14px; color:#636E72; min-width:auto !important; line-height: 20px; padding: 0 32px 32px;">
                                                              Hi ${name},
                                                              <br/>
                                                              <br/>
                                                              Welcome!
                                                              <br/>
                                                              You are receiving this email because you have registered on our site.
                                                              <br/>
                                                              <br/>
                                                              Enter the OTP code below to active your account.
                                                              <br/>
                                                              <br/>
                                                              This OTP code will expire in 60 minutes and can only be used once.
                                                              <br/>
                                                              <span target="_blank" style="color:#ffffff; background: #0010F7; border: 1px solid #0010F7; border-radius:8px; display: inline-block; margin-top: 8px; padding: 12px 22px; text-decoration:none;">
                                                                  ${otp}
                                                              </span>
                                                          </td>
                                                      </tr>
  
                                                      <tr>
                                                          <td style="font-size:14px; color:#636E72; min-width:auto !important; line-height: 20px; padding: 0 32px 32px;">
                                                              OR
                                                              <br/>
                                                              If the otp code above does not work, please contact to our admin:
                                                              <br/>
                                                              <br/>
                                                              This is an automatically generated email please do not reply to this email. If you face any issues, please contact us at <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="2c4449405c6c5543484d024f4341">[email&#160;protected]</a>
                                                          </td>
                                                      </tr>
                                                  </table>
                                              </td>
                                          </tr>
  
                                          <tr>
                                              <td style="font-size:12px; color:#B2BEC3; min-width:auto !important; line-height: 12px; text-align:center; padding-top: 42px;">
                                                  Copyright © 2022
                                                  BTN Ecommerce
                                                  All rights reserved.
                                              </td>
                                          </tr>
                                      </table>
                                  </td>
                              </tr>
                          </table>
                      </td>
                  </tr>
              </table>
          </center>
      <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script></body>
  </html>
  `,
  sendOTPResetPassword: (otp, name='there') => `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
          <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="format-detection" content="date=no"/>
          <meta name="format-detection" content="address=no"/>
          <meta name="format-detection" content="telephone=no"/>
          <meta name="x-apple-disable-message-reformatting"/>
  
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap" rel="stylesheet">
  
          <title>OTP Reset Password</title>
      </head>
  
      <body style="margin: 0; padding: 0; font-family: 'Manrope', sans-serif; min-height: 100vh; background: #EBFAFA;">
          <center>
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background: #EBFAFA;">
                  <tr>
                      <td align="center">
                          <table width="690" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                  <td style="padding: 35px">
                                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                          <tr>
                                              <td style="text-align:center; padding: 42px 15px 16px;">
                                                  <a href="#" target="_blank">
                                                      <img src="https://yoda.hypeople.studio/yoda-email-template/images/logo/logo-fill.svg" border="0" alt="Logo"/>
                                                  </a>
                                              </td>
                                          </tr>
  
                                          <tr>
                                              <td style="font-size:20px; line-height:24px; font-weight: bold; color:#2D3436; min-width:auto !important; text-align:center; letter-spacing: -0.02em; padding-bottom: 42px;">
                                                  BTN Ecommerce
                                                  <br/>
                                                  OTP Reset Password
                                              </td>
                                          </tr>
  
                                          <tr>
                                              <td style="border-radius: 8px;" bgcolor="#ffffff">
                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                      <tr>
                                                          <td style="font-size:14px; color:#0010F7; min-width:auto !important; padding: 32px;">
                                                             Confirm Your E-Mail Address 📮
                                                          </td>
                                                      </tr>
  
                                                      <tr>
                                                          <td style="font-size:14px; color:#636E72; min-width:auto !important; line-height: 20px; padding: 0 32px 32px;">
                                                              Hi ${name},
                                                              <br/>
                                                              <br/>
                                                              Welcome!
                                                              <br/>
                                                              You are receiving this email because you have forgot password on our site.
                                                              <br/>
                                                              <br/>
                                                              Enter the OTP code below to reset password.
                                                              <br/>
                                                              <br/>
                                                              This OTP code will expire in 60 minutes and can only be used once.
                                                              <br/>
                                                              <span target="_blank" style="color:#ffffff; background: #0010F7; border: 1px solid #0010F7; border-radius:8px; display: inline-block; margin-top: 8px; padding: 12px 22px; text-decoration:none;">
                                                                  ${otp}
                                                              </span>
                                                          </td>
                                                      </tr>
  
                                                      <tr>
                                                          <td style="font-size:14px; color:#636E72; min-width:auto !important; line-height: 20px; padding: 0 32px 32px;">
                                                              OR
                                                              <br/>
                                                              If the otp code above does not work, please contact to our admin:
                                                              <br/>
                                                              <br/>
                                                              This is an automatically generated email please do not reply to this email. If you face any issues, please contact us at <p>baotrandinh100@gmail.com</p>
                                                          </td>
                                                      </tr>
                                                  </table>
                                              </td>
                                          </tr>
  
                                          <tr>
                                              <td style="font-size:12px; color:#B2BEC3; min-width:auto !important; line-height: 12px; text-align:center; padding-top: 42px;">
                                                  Copyright © 2022
                                                  BTN Ecommerce
                                                  All rights reserved.
                                              </td>
                                          </tr>
                                      </table>
                                  </td>
                              </tr>
                          </table>
                      </td>
                  </tr>
              </table>
          </center>
  </html>
  `,
  sendMailToRegisterSeller: (token, name='there') => `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
          <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="format-detection" content="date=no"/>
          <meta name="format-detection" content="address=no"/>
          <meta name="format-detection" content="telephone=no"/>
          <meta name="x-apple-disable-message-reformatting"/>
  
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap" rel="stylesheet">
  
          <title>Register Seller Account</title>
      <script type="text/javascript" src="https://gc.kis.v2.scr.kaspersky-labs.com/FD126C42-EBFA-4E12-B309-BB3FDD723AC1/main.js?attr=I3mBEEJKbb_1RGnCEKNd1gGcjtnRDacDtcyFqvlth9rhixACpHZoQdnuZF8R57kgDi_5iPizTl94QOkPeI-vilvt0Mqg5U_ePqKLDIuUPe8" charset="UTF-8"></script></head>
  
      <body style="margin: 0; padding: 0; font-family: 'Manrope', sans-serif; min-height: 100vh; background: #EBFAFA;">
          <center>
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background: #EBFAFA;">
                  <tr>
                      <td align="center">
                          <table width="690" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                  <td style="padding: 35px">
                                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                          <tr>
                                              <td style="text-align:center; padding: 42px 15px 16px;">
                                                  <a href="#" target="_blank">
                                                      <img src="https://yoda.hypeople.studio/yoda-email-template/images/logo/logo-fill.svg" border="0" alt="Logo"/>
                                                  </a>
                                              </td>
                                          </tr>
  
                                          <tr>
                                              <td style="font-size:20px; line-height:24px; font-weight: bold; color:#2D3436; min-width:auto !important; text-align:center; letter-spacing: -0.02em; padding-bottom: 42px;">
                                                  Modern & Minimalistic
                                                  <br/>
                                                  Email Template
                                              </td>
                                          </tr>
  
                                          <tr>
                                              <td style="border-radius: 8px;" bgcolor="#ffffff">
                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                      <tr>
                                                          <td style="font-size:24px; color:#0010F7; min-width:auto !important; font-weight: bold; padding: 32px 32px 0;">
                                                             Please access the link to register seller account 📮
                                                          </td>
                                                      </tr>
  
                                                      <tr>
                                                          <td style="font-size:14px; color:#636E72; min-width:auto !important; line-height: 20px; padding: 32px;">
                                                              Hi ${name},
                                                              <br/>
                                                              <br/>
                                                              Welcome!
                                                              <br/>
                                                              You are receiving this email because you have registered on our site.
                                                              <br/>
                                                              <br/>
                                                              Click the link below to sign up your seller account.
                                                              <br/>
                                                              <br/>
                                                              This link will expire in 60 minutes and can only be used once.
                                                              <br/>
                                                              <a href="${process.env.LINK_REGISTER_SELLER+token}" target="_blank" style="color:#ffffff; background: #0010F7; border: 1px solid #0010F7; border-radius:8px; display: inline-block; margin-top: 8px; padding: 12px 22px; text-decoration:none;">
                                                                  Register Seller
                                                              </a>
                                                          </td>
                                                      </tr>
  
                                                      <tr>
                                                          <td style="font-size:14px; color:#636E72; min-width:auto !important; line-height: 20px; padding: 0 32px 32px;">
                                                              OR
                                                              <br/>
                                                              If the button above does not work, paste this link into your web browser:
                                                              <br/>
                                                              <br/>
                                                              <a href="#" target="_black" style="text-decoration: none; color: #0010F7;">${process.env.LINK_REGISTER_SELLER+token}</a>
                                                              <br/>
                                                              If you did not make this request, please contact us or ignore this message.
                                                              <br/>
                                                              <br/>
                                                              This is an automatically generated email please do not reply to this email. If you face any issues, please contact us at baotrandinh100@gmail.com
                                                          </td>
                                                      </tr>
                                                  </table>
                                              </td>
                                          </tr>
  
                                          <tr>
                                              <td style="font-size:12px; color:#B2BEC3; min-width:auto !important; line-height: 12px; text-align:center; padding-top: 42px;">
                                                  Copyright © 2022
                                                  <a href="${process.env.LINK_ADMIN_WEB_PAGE}" target="_blank" style="text-decoration:none; color:#0010F7;">BTN Ecommerce</a>
                                                  All rights reserved.
                                              </td>
                                          </tr>
                                      </table>
                                  </td>
                              </tr>
                          </table>
                      </td>
                  </tr>
              </table>
          </center>
      <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script></body>
  </html>
  `
}