package com.example.plugins

import io.ktor.http.*
import io.ktor.server.routing.*
import io.ktor.server.response.*
import io.ktor.server.application.*
import io.ktor.server.plugins.swagger.*

fun Application.configureRouting() {
    routing {

        get("/") {
            call.respondText("Hello World!")
        }

        get("/api/v1/forecast") {
            call.respondText("Hello World!")
        }

        get("/api/system/ping"){
            call.response.status(HttpStatusCode.OK)
            call.respondText("pong", ContentType.Application.Json)
        }
    }
}
