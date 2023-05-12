package rest

import (
	"errors"
	"github.com/labstack/echo/v4"
	"weathering-api/rest/systemHealth"
)

func Router() error {
	e := echo.New()

	e.GET("/system/health", systemHealth.Check)
	e.GET("/", helloWorld)

	err := e.Start(":9000")
	if err != nil {
		return errors.New("error starting echo server")
	}

	return nil
}

func helloWorld(c echo.Context) error {
	return c.String(200, "Hello, World!")
}
