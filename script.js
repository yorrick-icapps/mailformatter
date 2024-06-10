function updateTemplate() {
    const message = document.getElementById('message').value;
    const name = document.getElementById('name').value;
    const functionTitle = document.getElementById('function').value;
    const emailaddress = document.getElementById('emailaddress').value;
    const footerimage = document.getElementById('footerimage').value;

    const template = `
    <body>
    <div class="moz-text-html" lang="x-unicode">
    <div id="message" dir="ltr">${message}</div>
    <div>Vriendelijke groeten,</div>
    <div>${name} <br clear="all">
    <div></div>
    <span class="gmail_signature_prefix">-- </span><br>
    <div dir="ltr" class="gmail_signature" data-smartmail="gmail_signature">
    <div dir="ltr">
    <div>
    <table style="color: #3f484f; font-family: Helvetica,sans-serif; font-size: 10px;" cellspacing="0" cellpadding="0">
    <tbody>
    <tr>
    <td>
    <p style="font-size: 12px; margin: 0px;">Met vriendelijke groeten, kind regards,</p>
    </td>
    </tr>
    </tbody>
    </table>
    <table style="color: #3f484f; font-family: Helvetica,sans-serif; font-size: 10px; margin-top: 16px;" cellspacing="0" cellpadding="0">
    <tbody>
    <tr>
    <td colspan="1" style="padding-right: 16px;"><img alt="" src="https://signature.icapps.com/slash-purple.png" style="vertical-align: middle; width: 34px; height: 57px;"></td>
    <td colspan="2" style="padding-right: 32px;">
    <h1 id="name" style="font-size: 20px; white-space: nowrap; word-break: keep-all; color: #002548; margin: 0px 0px 2px;">${name}</h1>
    <h2 id="function" style="font-size: 12px; white-space: nowrap; word-break: keep-all; color: #c3c9d3; margin: 0px;">${functionTitle}</h2>
    <span style="font-size: 11px; display: block; white-space: nowrap; word-break: keep-all; margin: 7px 0px 0px; color: #009ac7;"><a id="emailaddress" href="mailto:${emailaddress}" style="display: inline; word-break: keep-all; margin: 0px 0.4rem 0px 0px; color: #009ac7;">${emailaddress}</a>|<a href="tel:+32489477008" style="display: inline; word-break: keep-all; margin: 0px 0px 0px 0.4rem; color: #009ac7;">+32 489 477 008</a></span></td>
    </tr>
    <tr>
    <td colspan="3" style="padding-top: 32px;"><a href="https://icapps.com/"><img alt="icapps" src="https://signature.icapps.com/icapps-logo.png" style="vertical-align: middle; width: 88px; height: 13px;"></a></td>
    </tr>
    <tr>
    <td colspan="3">
    <p style="font-size: 11px; padding-top: 8px; margin: 0px; color: #c3c9d3; white-space: nowrap; word-break: keep-all;"><a href="https://icapps.com/" style="font-size: 10px; color: #009ac7; padding-right: 8px;">www.icapps.com</a>|<a href="https://www.google.com/maps/place/iCapps/@51.2304913,4.399606,17z/data=!3m1!4b1!4m5!3m4!1s0x47c3f6f21ac98093:0x31dea265bbfa747c!8m2!3d51.230488!4d4.4018" style="padding-left: 8px; margin: 0px; color: #c3c9d3; word-break: keep-all;">Hangar 26/27 - Rijnkaai 100 B16 - 2000 Antwerpen</a></p>
    </td>
    </tr>
    <tr>
    <td colspan="3" style="padding-top: 10px; padding-bottom: 10px;"><a href="https://www.linkedin.com/company/icapps" style="margin-right: 10px;"><img src="https://subsites.icapps.be/icapps/li-logo" alt="LinkedIn" style="width: 20px; background-color: transparent;"></a><a href="https://www.facebook.com/icappsbe/" style="margin-right: 10px;"><img src="https://subsites.icapps.be/icapps/fb-logo" alt="Facebook" style="width: 20px; background-color: transparent;"></a><a href="https://www.instagram.com/icapps/?hl=en" style="margin-right: 10px;"><img src="https://subsites.icapps.be/icapps/ig-logo" alt="Instagram" style="width: 20px; background-color: transparent;"></a><a href="https://twitter.com/icapps?lang=en" style="margin-right: 10px;"><img src="https://subsites.icapps.be/icapps/tw-logo" alt="twitter" style="width: 20px; background-color: transparent;"></a><br><br><a id="footerimage" href="${footerimage}"><img src="https://ci3.googleusercontent.com/mail-sig/AIorK4xIAUIbpfvbprzmE4Yw1tNmGQfS1f6coacfS2M8l6QGRgD6UilaR8JrPFLdBFZa_Hqxkwohb3q0NgI6"></a></td>
    </tr>
    </tbody>
    </table>
    </div>
    <div></div>
    </div>
    </div>
    </div>
    </div>
    </body>
    `;

    document.getElementById('updatedTemplate').innerText = template;
}
