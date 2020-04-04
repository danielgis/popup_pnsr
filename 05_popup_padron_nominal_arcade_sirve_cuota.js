// {expresion/expr5}
var response = ''
var response_dict = {};

response_dict['a'] = IIF($feature["cuo_sirve_a"]=='1', 'Administración', null)
response_dict['b'] = IIF($feature["cuo_sirve_b"]=='1', 'Operación', null)
response_dict['c'] = IIF($feature["cuo_sirve_c"]=='1', 'Mantenimiento', null)
response_dict['d'] = IIF($feature["cuo_sirve_d"]=='1', 'Reparación', null)

for (var i in response_dict){
    if(response_dict[i] != null){
        response = response_dict[i] + TextFormatting.NewLine + response
    }
}

return response