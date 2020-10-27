package handlers

import (
	"fmt"
	"net/http"

	"github.com/vSterlin/images/backend/data"
)

type Some struct {
	Value string `json:"value"`
}

func PostHandler(w http.ResponseWriter, r *http.Request) {

	var v Some
	data.FromJSON(&v, r.Body)
	str := []byte(v.Value)

	newStr := []byte{}
	for i := len(str) - 1; i >= 0; i-- {
		newStr = append(newStr, str[i])
	}
	v.Value = string(newStr)
	data.ToJSON(v, w)
	fmt.Printf("%+v\n", v)

}
