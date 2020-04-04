// {expresion/expr16}
var response = IIF($feature["cod_prestador_sis"]=='1.0', 'Nuevo', $feature["cod_prestador_sis"])
return response