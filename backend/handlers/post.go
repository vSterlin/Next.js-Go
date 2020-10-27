package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Some struct {
	Value string `json:"value"`
}

func PostHandler(w http.ResponseWriter, r *http.Request) {
	enc := json.NewEncoder(w)

	dec := json.NewDecoder(r.Body)

	var v Some
	dec.Decode(&v)
	str := []byte(v.Value)

	newStr := []byte{}
	for i := len(str) - 1; i >= 0; i-- {
		newStr = append(newStr, str[i])
	}
	v.Value = string(newStr)
	enc.Encode(v)
	fmt.Printf("%+v\n", v)

}
