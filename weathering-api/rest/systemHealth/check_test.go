package systemHealth

import (
	"github.com/labstack/echo/v4"
	"net/http"
	"net/url"
	"testing"
)

func TestCheck(t *testing.T) {
	type args struct {
		c      echo.Context
		path   string
		method http.Request
	}
	tests := []struct {
		name    string
		args    args
		wantErr bool
	}{
		// TODO: Add test cases.
		{
			"TestCheck",
			args{
				c: echo.New().NewContext(&http.Request{
					Method: http.MethodGet,
					URL:    &url.URL{Path: "/system/health"},
				},
					nil),
				path: "/system/health",
				method: http.Request{
					Method: http.MethodGet,
				},
			},
			false,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if err := Check(tt.args.c); (err != nil) != tt.wantErr {
				t.Errorf("Check() error = %v, wantErr %v", err, tt.wantErr)
			}
		})

		c := echo.New().NewContext(&http.Request{
			Method: tt.args.method.Method,
			URL:    &url.URL{Path: tt.args.path},
		}, nil)

		if err := Check(c); (err != nil) != tt.wantErr {
			t.Errorf("Check() error = %v, wantErr %v", err, tt.wantErr)
		}

	}
}
