package data

import (
	"encoding/json"
	"io"
)

func FromJSON(i interface{}, w io.Reader) error {
	return json.NewDecoder(w).Decode(i)
}

func ToJSON(i interface{}, r io.Writer) error {
	return json.NewEncoder(r).Encode(i)
}
