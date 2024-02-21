## Deep linking 
Navigation or redirect with Deeplinking

used React-navigation for deep linking and made changes in androidmanifest.xml file with create prifixes for that

any app call `mychat://app/message/55` this url from app than this app will opended .

Learn More: [React Navigation](https://reactnavigation.org/docs/configuring-links)

https://reactnavigation.org/docs/configuring-links

`intent`, `deeolinks`


## Command to run deep link and open app specific screen:
``
 adb shell am start -W -a android.intent.action.VIEW -d "mychat://app/message/55" com.paymentapp
 ``

 Java -17 
 node - v20.11.0