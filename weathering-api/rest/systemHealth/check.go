package systemHealth

import (
	"github.com/labstack/echo/v4"
	"net/http"
)

type healthCheckResponse struct {
	Alive bool `json:"alive"`
}

func Check(c echo.Context) error {
	msg := healthCheckResponse{
		Alive: true,
	}

	return c.JSON(http.StatusOK, msg)
}
