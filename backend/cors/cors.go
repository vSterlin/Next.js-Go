package cors

import (
	"net/http"

	"github.com/rs/cors"

	"github.com/gorilla/mux"
)

func SetCORS(r *mux.Router) (c http.Handler) {
	c = cors.New(cors.Options{
		AllowedOrigins: []string{"*"},
	}).Handler(r)
	return c
}
