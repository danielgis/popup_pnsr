// {expresion/expr14}
var response = IIF($feature["cod_prestador_sis"]=='1.0' || $feature["cod_prestador_dep"]=='1.0', 'show', 'none')
return response