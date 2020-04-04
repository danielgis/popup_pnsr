// {expresion/expr7}
var response = ''
var response_dict = {};

response_dict['a'] = IIF($feature["cuo_nopaga_a"]=='1', 'El servicio es de mala calidad', null)
response_dict['b'] = IIF($feature["cuo_nopaga_b"]=='1', 'La JASS no realiza rendición de cuentas', null)
response_dict['c'] = IIF($feature["cuo_nopaga_c"]=='1', 'No cuento con recursos', null)
response_dict['d'] = IIF($feature["cuo_nopaga_d"]=='1', 'No estoy de acuerdo con la cuota', null)

for (var i in response_dict){
    if(response_dict[i] != null){
        response = response_dict[i] + TextFormatting.NewLine + response
    }
}

return response
