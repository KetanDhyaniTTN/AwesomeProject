package com.awesomeproject.myDevice

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class SwiftReservation internal constructor(context: ReactApplicationContext?) :
    ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "VoiceChangingModule"
    }

    @ReactMethod
    fun getKeyValuePairs(): Array<Pair<String, String>> {
        // Create an array of key-value pairs
        val keyValuePairs = arrayOf(
            Pair("restaurantName", "React Swift Native Restaurant"),
            Pair("phoneNumber", "1-234-567-89XX"),
            Pair("platform", "Android")
        )
        return keyValuePairs
    }
}