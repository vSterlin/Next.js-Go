package main

import (
	"net/http"

	"github.com/vSterlin/images/backend/cors"
	"github.com/vSterlin/images/backend/handlers"

	"github.com/gorilla/mux"
)

func main() {

	r := mux.NewRouter()
	r.HandleFunc("/", handlers.PostHandler).Methods(http.MethodPost)

	http.ListenAndServe("localhost:8080", cors.SetCORS(r))
}
