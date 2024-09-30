//
//  BridgingIos.swift
//  AwesomeProject
//
//  Created by Ketan Dhyani on 14/09/24.
//

import Foundation
import React


@objc(BridgingIos)
class BridgingIos : NSObject{
  
  
  @objc
  func bridgingIos(){
    print("From IOS to React Native")
  }
  
}

@objc(SwiftReservation)
class SwiftReservation: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["restaurantName": "React Swift Native Restaurant",
            "phoneNumber"   : "1-234-567-89XX",
            "platform"      : "IOS"
    ]
  }
}
