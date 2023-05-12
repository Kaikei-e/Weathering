package main

import "weathering-api/rest"

func main() {
	err := rest.Router()
	if err != nil {
		panic(err)
	}
}
