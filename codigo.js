//codificação JavaScript


function calculos_reg_tub_succao(){

	//procedimentos para tubulação de sucção
	calcularVelocidadeEscoamento_succao();
	calcularNumeroReynolds_succao();
}

function calculos_reg_tub_recalque(){

	//procedimentos para tubulação de sucção
	calcularVelocidadeEscoamento_recalque();
	calcularNumeroReynolds_recalque();
}

function calcularVelocidadeEscoamento_succao(){

// zerando variáveis de sucção
	diametro_tub_succao = null;
	vazao_tub_succao = null;
	vazao_tub_succao = null;
	area_tub_succao = null;
	velocidade_tub_succao = null;
	viscosidade_cinematica_tub_succao = null;
	numero_reynolds_tub_succao = null;

//cálculos para o regime de escoamento da tubulação de SUCÇÃO
    var diametro_tub_succao= document.getElementById('diametro_tub_succao_Id').value;    
	var vazao_tub_succao= document.getElementById('vazao_tub_succao_Id').value;

	//espelhando o valor do diâmetro
	document.getElementById('diametro_perda_carga_succao_Id').value = diametro_tub_succao;

	try{

		diametro_tub_succao = parseFloat(diametro_tub_succao);
		vazao_tub_succao = parseFloat(vazao_tub_succao);

		if(vazao_tub_succao!='' && diametro_tub_succao!='' &&vazao_tub_succao!=null && diametro_tub_succao!=null){

		area_tub_succao = (3.141592653589793)*(diametro_tub_succao/2)*(diametro_tub_succao/2);
	
		var velocidade_tub_succao = vazao_tub_succao/area_tub_succao;

		document.getElementById('velocidade_tub_succao_Id').value = velocidade_tub_succao ;

		return velocidade_tub_succao;
	}

	}catch(e){
		document.getElementById('velocidade_tub_succao_Id').value = '';

	}	
}

	function calcularNumeroReynolds_succao(){

		var viscosidade_cinematica_tub_succao = document.getElementById('viscosidade_cinematica_tub_succao_Id').value;
		var diametro_tub_succao = document.getElementById('diametro_tub_succao_Id').value;
		var velocidade_tub_succao = document.getElementById('velocidade_tub_succao_Id').value;

		viscosidade_cinematica_tub_succao = parseFloat(viscosidade_cinematica_tub_succao);
		diametro_tub_succao = parseFloat(diametro_tub_succao);
		velocidade_tub_succao = parseFloat(velocidade_tub_succao);

		var numero_reynolds_tub_succao = velocidade_tub_succao*diametro_tub_succao/viscosidade_cinematica_tub_succao;

		// classificando o regime de escoamento
		if (numero_reynolds_tub_succao >= 0 && numero_reynolds_tub_succao <= 2000) {
			classificacao_reg_tub_succao = "Regime laminar";
		}
		if (numero_reynolds_tub_succao > 2000 & numero_reynolds_tub_succao <= 4000) {
			classificacao_reg_tub_succao = "Regime de transição";
		}
		if(numero_reynolds_tub_succao > 4000){
			classificacao_reg_tub_succao = "Regime turbulento";
		}

		document.getElementById('numero_reynolds_tub_succao_Id').value=numero_reynolds_tub_succao;

		
		document.getElementById('classificacao_reg_tub_succao_Id').value=classificacao_reg_tub_succao;

		return numero_reynolds_tub_succao;	
	}



	function atribuir_valores_paraequacoes_perda_carga_succao(){
		
		var coefRug_abs_material_tub_succao = null;// variavel do coeficiente de rugosidade absoluta 
		var coefRug_hazenwillians_material_tub_succao = null;// variavel do coeficiente de hazen willians
		var coefAtrito_flaman_material_tub_succao = null;// coeficiente de atrito para flaman

		coefRug_hazenwillians_material_tub_succao = null;
		coefAtrito_flaman_material_tub_succao = null;
		
		var tipo_material_tub_succao = document.getElementById('material_tubulacao_succaoId').value;

		if ( tipo_material_tub_succao == 'Aço corrugado (chapa ondulada)' ) {
			coefRug_hazenwillians_material_tub_succao = 60;
			coefAtrito_flaman_material_tub_succao = null;
			coefRug_abs_material_tub_succao = null;
		}else if( tipo_material_tub_succao == 'Aço com juntas lock-bar, em serviço' ){
			coefRug_hazenwillians_material_tub_succao = 90;
			coefAtrito_flaman_material_tub_succao = null;
			coefRug_abs_material_tub_succao = null;
		}else if( tipo_material_tub_succao == 'Aço com juntas lock-bar, tubos novos' ){
			coefRug_hazenwillians_material_tub_succao = 130;
			coefAtrito_flaman_material_tub_succao = null;
			coefRug_abs_material_tub_succao = null;
		}else if( tipo_material_tub_succao == 'Aço galvanizado' ){
			coefRug_hazenwillians_material_tub_succao = 125;
			coefAtrito_flaman_material_tub_succao = null;
			coefRug_abs_material_tub_succao = 0.00015;
		}else if( tipo_material_tub_succao == 'Aço rebitado, em uso' ){
			coefRug_hazenwillians_material_tub_succao = 85;
			coefAtrito_flaman_material_tub_succao = null;
			coefRug_abs_material_tub_succao = 0.006;
		}else if( tipo_material_tub_succao == 'aço rebitado, tubos novos' ){
			coefRug_hazenwillians_material_tub_succao = 110;
			coefAtrito_flaman_material_tub_succao = null;
			coefRug_abs_material_tub_succao = 0.003;
		}else if( tipo_material_tub_succao == 'Aço soldado, em uso' ){
			coefRug_hazenwillians_material_tub_succao = 90;
			coefAtrito_flaman_material_tub_succao = null;
			coefRug_abs_material_tub_succao = null;
		}else if( tipo_material_tub_succao == 'Aço soldado com revestimento especial' ){
			coefRug_hazenwillians_material_tub_succao = null;
			coefAtrito_flaman_material_tub_succao = null;
			coefRug_abs_material_tub_succao = null;
		}else if( tipo_material_tub_succao == 'Cobre' ){
			coefRug_hazenwillians_material_tub_succao = 130;
			coefAtrito_flaman_material_tub_succao = null;
			coefRug_abs_material_tub_succao = 0.000015;
		}else if( tipo_material_tub_succao == 'Concreto, bom acabamento' ){
			coefRug_hazenwillians_material_tub_succao = null;
			coefAtrito_flaman_material_tub_succao = null;
			coefRug_abs_material_tub_succao = null;
		}else if( tipo_material_tub_succao == 'Ferro fundido, novos' ){
			coefRug_hazenwillians_material_tub_succao = 130;
			coefAtrito_flaman_material_tub_succao = 0.000185;
			coefRug_abs_material_tub_succao = 0.0005;
		}else if( tipo_material_tub_succao == 'Ferro fundido, usados' ){
			coefRug_hazenwillians_material_tub_succao = 90;
			coefAtrito_flaman_material_tub_succao = 0.000230;
			coefRug_abs_material_tub_succao = 0.005;
		}else if( tipo_material_tub_succao == 'Ferro fundido, após 15-20 anos de uso' ){
			coefRug_hazenwillians_material_tub_succao = 100;
			coefAtrito_flaman_material_tub_succao = null;
			coefRug_abs_material_tub_succao = 0.005;
		}else if( tipo_material_tub_succao == 'Ferro revestido de cimento' ){
			coefRug_hazenwillians_material_tub_succao = 130;
			coefAtrito_flaman_material_tub_succao = null;
			coefRug_abs_material_tub_succao = null;
		}else if( tipo_material_tub_succao == 'Madeira em aduelas' ){
			coefRug_hazenwillians_material_tub_succao = 120;
			coefAtrito_flaman_material_tub_succao = null;
			coefRug_abs_material_tub_succao = null;
		}else if( tipo_material_tub_succao == 'Tubos plástico (P.V.C, entre outros)' ){
			coefRug_hazenwillians_material_tub_succao = 150;
			coefAtrito_flaman_material_tub_succao = 0.000135;
			coefRug_abs_material_tub_succao = 0.000015;
		}

		document.getElementById('coef_rug_hazenwillians_succaoId').value = coefRug_hazenwillians_material_tub_succao ;
		document.getElementById('coef_atrito_flaman_succaoId').value = coefAtrito_flaman_material_tub_succao ;
		document.getElementById('coef_rug_abs_darcy_succaoId').value = coefRug_abs_material_tub_succao ;
		

	}

	function perda_carga_tub_succao(){
		//pega o comprimento
		var comprimento_tub_succao = document.getElementById('comprimento_tub_succaoId').value;
		//pega o diâmetro
		var diametro_tub_succao = document.getElementById('diametro_perda_carga_succao_Id').value;
		//pega a velocidade
		var velocidade_tub_succao = document.getElementById('velocidade_tub_succao_Id').value;
		//pega a vazão
		var vazao_tub_succao = document.getElementById('vazao_tub_succao_Id').value;

		//pega a rugosidade absoluta
		var rugosidade_abs_tub_succao = document.getElementById('coef_rug_abs_darcy_succaoId').value;
		//pega o coeficiente de rugosidade de hazen willians
		var coef_rug_hazenwillians_succao = document.getElementById('coef_rug_hazenwillians_succaoId').value;
		//pega o fator de atrito de Flaman
		var coef_atrito_flaman_succao = document.getElementById('coef_atrito_flaman_succaoId').value;

		//pega o número de reynolds
		var numero_reynolds_tub_succao = document.getElementById('numero_reynolds_tub_succao_Id').value;
		
		//atribui o fator de atrito
		//inico do calculo do fator de atrito
		var a = (rugosidade_abs_tub_succao/(3.7*diametro_tub_succao)) + 5.74/Math.pow(numero_reynolds_tub_succao,0.9);
		 a = Math.log(a);

		var b = Math.pow(2500/numero_reynolds_tub_succao,6);
		
		var c = a-b;

		var d =Math.pow(c,-16);
		d = 9.5*d;

		var e = Math.pow((64/numero_reynolds_tub_succao),8);
		var f = d+e;
		var g = Math.pow(f,0.125);
		//fim dos procedimento para calcular o fator de atrito
		var fator_atrito_darcy_succao = g;
		//atribuição do valor do fator de atrito na tela
		document.getElementById('fator_atrito_darcy_succaoId').value = fator_atrito_darcy_succao;
		//calculo da perda de carga pela equação de darcy
		var perda_carga_darcy_tub_succao = (fator_atrito_darcy_succao*comprimento_tub_succao*velocidade_tub_succao*velocidade_tub_succao)/(2*diametro_tub_succao*9.81);
		
		//atribuição do valor da perda de carga calculada pela equação de darcy na tela
		if(perda_carga_darcy_tub_succao>0){
			document.getElementById('perda_carga_darcy_tub_succaoId').value = perda_carga_darcy_tub_succao;
		}else{
			document.getElementById('perda_carga_darcy_tub_succaoId').value = '';
		}
		

		//início do cálculo da perda de carga por hazen willians
		var hpasso1 = 10.6451 ;
		hpasso1 = hpasso1 * Math.pow(vazao_tub_succao,1.852) ;
		hpasso1 = hpasso1 * comprimento_tub_succao;
		var hpasso2 = Math.pow(coef_rug_hazenwillians_succao,1.852) ;
		hpasso2 = hpasso2 * Math.pow(diametro_tub_succao,4.871);

		var perda_carga_hazenwillians_tub_succao = hpasso1/hpasso2;

		perda_carga_hazenwillians_tub_succao = parseFloat(perda_carga_hazenwillians_tub_succao);

		//atribução do valor da perda de carga calculado por hazen willians
		if(perda_carga_hazenwillians_tub_succao>0){
			document.getElementById('perda_carga_hazenwillians_tub_succaoId').value = perda_carga_hazenwillians_tub_succao;
		}else{
			document.getElementById('perda_carga_hazenwillians_tub_succaoId').value = '';
		}

		
		// fim do cálculo da perda de carga pela equação de hazen willians

		//início dos cálculos da perda de carga por Flaman
		var fpasso1 = 10.107 ;
		fpasso1 = fpasso1 * comprimento_tub_succao;
		fpasso1 = fpasso1 * coef_atrito_flaman_succao;
		fpasso1 = fpasso1 * Math.pow(vazao_tub_succao,1.75);
		var fpasso2 = Math.pow(diametro_tub_succao,4.76);

		var perda_carga_flamant_tub_succao = fpasso1/fpasso2;
		// fim dos cálculos da parda de carga por Flaman
		//atribuição do valor da perda de carga por Flaman na tela
		if(perda_carga_flamant_tub_succao>0){
			document.getElementById('perda_carga_flamant_tub_succaoId').value = perda_carga_flamant_tub_succao;
		}else{
			document.getElementById('perda_carga_flamant_tub_succaoId').value = '';
		}
		


	}

	//função que atribui os valores de K para as peças (tanto pra sucção quanto pro recalque)
	function atribuir_valor_coef_k_pecas_especiais(){
		var peca_especial = document.getElementById('peca_selecionada').value;
		var coef_k;
		
		switch(peca_especial){
			case 'Ampliação gradual':
				coef_k = 0.3 ;
			break;

			case 'Redução gradual':
				coef_k = 0.15;
			break;

			case 'Bocais':
				coef_k = 2.75 ;
			break;

			case 'Medidor Venturi':
				coef_k = 2.75;
			break;

			case 'Tê, passagem direta':
				coef_k = 0.9;
			break;

			case 'Tê, saída lateral':
				coef_k = 2 ;
			break;

			case 'Comporta aberta':
				coef_k = 1 ;
			break;

			case 'Cotovelo de 90° raio curto':
				coef_k = 0.9 ;
			break;

			case 'Cotovelo de 90° raio longo':
				coef_k = 0.6 ;
			break;

			case 'Cotovelo de 45°':
				coef_k = 0.4 ;
			break;

			case 'Curva de 90°':
				coef_k = 0.4 ;
			break;

			case 'Curva de 45°':
				coef_k = 0.2;
			break;

			case 'Curva de 22,5°':
				coef_k = 0.1;
			break;

			case 'Curva de retorno 180°':
				coef_k = 2.20 ;
			break;

			case 'Válvula de gaveta aberta':
				coef_k = 0.15 ;
			break;

			case 'Válvula de ângulo aberta':
				coef_k = 5 ;
			break;

			case 'Válvula de globo aberta':
				coef_k = 10;
			break;

			case 'Válvula de borboleta aberta':
				coef_k = 0.3;
			break;

			case 'Válvula de pé com crivo':
				coef_k = 10 ;
			break;

			case 'Válvula de retenção':
				coef_k = 3;
			break;

			case 'Válvula de bóia':
				coef_k = 3;
			break;

			case 'Saída de tubulação':
				coef_k = 1;
			break;
		}

		document.getElementById('valor_do_coef_k').value = coef_k;
		document.getElementById('situacao_perda_pecaEspecial').value = '';
		

	}

	//calcula a perda de carga em peças especiais na tub de sucção
	function perda_pecaespecial_succao(){
		
		var velocidade_escoamento_succao = document.getElementById('velocidade_tub_succao_Id').value;
		var valor_de_k                   = document.getElementById('valor_do_coef_k').value;
		var valor_total_perda_peca_succao= document.getElementById('perda_pecas_acumulada_tub_succaoId').value;

		if (parseFloat(valor_total_perda_peca_succao)){
			valor_total_perda_peca_succao = valor_total_perda_peca_succao;
		}else{
			valor_total_perda_peca_succao = 0;
		}

		var valor_perda_peca_succao;     
			valor_perda_peca_succao = (Math.pow(velocidade_escoamento_succao,2) * valor_de_k)/(2* 9.81) ; 

		//verifica a quantidade de peças
		var quantidade_pecas = prompt ("Quantidade de peças");
		if (parseFloat(quantidade_pecas)){
		
		valor_perda_peca_succao = valor_perda_peca_succao * quantidade_pecas;

		var soma_perdas_pecas_succao ;
		soma_perdas_pecas_succao     = (parseFloat(valor_total_perda_peca_succao) + parseFloat(valor_perda_peca_succao));

		//realiza a soma e atribui ao campo correspondente ao valor da perda de carga por peças especiais
		document.getElementById('perda_pecas_acumulada_tub_succaoId').value = soma_perdas_pecas_succao;
		alert("Perda adicionada à sucção");
		document.getElementById('situacao_perda_pecaEspecial').value = 'Perda adicionada à sucção';

		}else{
			quantidade_pecas = 0;
			valor_perda_peca_succao = valor_perda_peca_succao * quantidade_pecas;
			alert('Algo deu errado!');
		}
	
	}

	//reseta o valor da perda de carga para sucção
	function zerar_perda_pecaespecial_succao(){
		document.getElementById('situacao_perda_pecaEspecial').value = 'perda para sucção foi zerada';
		document.getElementById('perda_pecas_acumulada_tub_succaoId').value = '0';
	}

	//atribuição dos valores da pressão atmosférica em seu campo
	function atribuir_pressao_atm_por_altitude(){
		var npsh_altitude = document.getElementById('NPSH_altitudeId').value;
		var npsh_pressao_atmosferica;

		switch(npsh_altitude){
			case '0':
				npsh_pressao_atmosferica = '10.33' ;
			break;

			case '150':
				npsh_pressao_atmosferica = '10.16' ;
			break;

			case '300':
				npsh_pressao_atmosferica = '9.98' ;
			break;

			case '450':
				npsh_pressao_atmosferica = '9.79' ;
			break;

			case '600':
				npsh_pressao_atmosferica = '9.58' ;
			break;

			case '750':
				npsh_pressao_atmosferica = '9.35' ;
			break;

			case '1.000':
				npsh_pressao_atmosferica = '9.12' ;
			break;

			case '1.250':
				npsh_pressao_atmosferica = '8.88' ;
			break;

			case '1.500':
				npsh_pressao_atmosferica = '8.64' ;
			break;

			case '2.000':
				npsh_pressao_atmosferica = '8.08' ;
			break;
		}

		document.getElementById('NPSH_Pressao_atmosfericaId').value = npsh_pressao_atmosferica;		
	}

	//Atribuição dos valores de pressão de vapor d'água
	function atribuir_pressao_vapor_por_temperatura(){

		var	npsh_temperatura = document.getElementById('NPSH_TemperaturaId').value;
		var npsh_pressao_vapor;
		switch(npsh_temperatura){
			case '0':
				npsh_pressao_vapor = '0.062';
			break;

			case '4':
				npsh_pressao_vapor = '0.083';
			break;

			case '10':
				npsh_pressao_vapor = '0.125';
			break;

			case '20':
				npsh_pressao_vapor = '0.239';
			break;

			case '30':
				npsh_pressao_vapor = '0.433';
			break;

			case '40':
				npsh_pressao_vapor = '0.753';
			break;

			case '50':
				npsh_pressao_vapor = '1.258';
			break;

			case '60':
				npsh_pressao_vapor = '2.31';
			break;

			case '80':
				npsh_pressao_vapor = '4.831';
			break;

			case '100':
				npsh_pressao_vapor = '10.33';
			break;


		}

		document.getElementById('NPSH_Pressao_vaporId').value= npsh_pressao_vapor; 

	}

	//ATRIBUIR A PERDA DA SUCÇÃO AO NPSH E CALCULA O NPSH
	function atribuir_perda_succao_aoNPSH(){
		var perdas_succao_pecas_especiais = document.getElementById('perda_pecas_acumulada_tub_succaoId').value;


		selecao = prompt('Selecione a equação de perda para ser usada no cálculo do N.P.S.H:\n 1 - Darcy-Weisbach\n 2 - Hazen-Willians\n 3 - Flaman');

		switch(selecao){
			case '1':
				var perdas_succao_tubulacao = document.getElementById('perda_carga_darcy_tub_succaoId').value;
				var perdas_totais_succao = parseFloat(perdas_succao_pecas_especiais) + parseFloat(perdas_succao_tubulacao);
				document.getElementById('NPSH_perda_succaoId').value = perdas_totais_succao ;
				alert('Darcy-Weisbach selecionado');
			break;

			case '2':
				var perdas_succao_tubulacao = document.getElementById('perda_carga_hazenwillians_tub_succaoId').value;
				var perdas_totais_succao = parseFloat(perdas_succao_pecas_especiais) + parseFloat(perdas_succao_tubulacao);
				document.getElementById('NPSH_perda_succaoId').value = perdas_totais_succao ;
				alert('Hazen-Willians selecionado');
			break; 

			case '3':
				var perdas_succao_tubulacao = document.getElementById('perda_carga_flamant_tub_succaoId').value;
				var perdas_totais_succao = parseFloat(perdas_succao_pecas_especiais) + parseFloat(perdas_succao_tubulacao);
				document.getElementById('NPSH_perda_succaoId').value = perdas_totais_succao ;
				alert('Flaman selecionado');
			break;

			default:
				alert('Nenhum valor válido foi digitado!');
				document.getElementById('NPSH_perda_succaoId').value = '' ;

			break;
		}	
	}

	function calculo_NPSH(){
		var npsh_pressao_atmosferica      = document.getElementById('NPSH_Pressao_atmosfericaId').value;
		var NPSH_Pressao_vapor            = document.getElementById('NPSH_Pressao_vaporId').value;
		var npsh_altura_geometrica_succao = document.getElementById('npsh_altura_geometrica_succaoId').value;
		var NPSH_situacao_bomba           = document.getElementById('NPSH_situacao_bombaId').value;
		var NPSH_total_perda_succao       = document.getElementById('NPSH_perda_succaoId').value;


		var NPSH_disponivel;
		if(NPSH_situacao_bomba == 'Bomba afogada'){
			NPSH_disponivel = parseFloat(npsh_pressao_atmosferica) - parseFloat(NPSH_Pressao_vapor) + parseFloat(npsh_altura_geometrica_succao) - parseFloat(NPSH_total_perda_succao);
		}else{
			NPSH_disponivel = parseFloat(npsh_pressao_atmosferica) - parseFloat(NPSH_Pressao_vapor) - parseFloat(npsh_altura_geometrica_succao) - parseFloat(NPSH_total_perda_succao);
		}

		document.getElementById('NPSH_disponivelId').value = NPSH_disponivel;

	}

	function calculo_potencia(){
		//atribui valor às variáveis
		var potencia_peso_especifico = document.getElementById('potencia_peso_especificoId').value; //peso específico
		var potencia_vazao = document.getElementById('potencia_vazaoId').value; // vazão
		var potencia_rendimento = document.getElementById('potencia_rendimentoId').value; // rendimento

		var potencia_perdas_succao_pecas = document.getElementById('perda_pecas_acumulada_tub_succaoId').value;
		var potencia_perdas_recalque_pecas = document.getElementById('perda_pecas_acumulada_tub_recalqueId').value;
		
		//selecionar qual equação usar na sucção
		var valor_succao   = prompt('Selecione a equação de perda para ser usada (tubulação de sucção) no cálculo da altura manométrica total:\n 1 - Darcy-Weisbach\n 2 - Hazen-Willians\n 3 - Flaman');
		//selecionar qual equação usar no recalque	
		var valor_recalque = prompt('Selecione a equação de perda para ser usada (tubulação de recalque) no cálculo da altura manométrica total:\n 1 - Darcy-Weisbach\n 2 - Hazen-Willians\n 3 - Flaman');

		var potencia_AGR = document.getElementById('potencia_MAGR_Id').value; // altura geométrica de recalque

		var potencia_AGS = document.getElementById('npsh_altura_geometrica_succaoId').value ; // altura geométrica de sucção
		var potencia_bomba_afoagada_nafogada= document.getElementById('NPSH_situacao_bombaId').value; // verificação afoagada ou n afogada
		//verifica se a bomba é ou não afogada
		if(potencia_bomba_afoagada_nafogada == 'Bomba afogada'){
			potencia_AGS = potencia_AGS * -1;
		}		


		// pega o valor da perda de carga na tubulação de sucção
		switch (valor_succao){
			case '1':
				var perdas_succao_tubulacao = document.getElementById('perda_carga_darcy_tub_succaoId').value;
			break;
			case '2':
				var perdas_succao_tubulacao = document.getElementById('perda_carga_hazenwillians_tub_succaoId').value;
			break;
			case '3':
				var perdas_succao_tubulacao = document.getElementById('perda_carga_flamant_tub_succaoId').value;
			break; 
			
			default:
				alert('Nenhum valor válido foi digitado');
			break;
		}

		//pega o valor da perda de carga da tubulação de recalque
		switch (valor_recalque){
			case '1':
				var perdas_recalque_tubulacao = document.getElementById('perda_carga_hazenwillians_tub_recalqueId').value;
			break;
			case '2':
				var perdas_recalque_tubulacao = document.getElementById('perda_carga_hazenwillians_tub_recalqueId').value;
			break;
			case '3':
				var perdas_recalque_tubulacao = document.getElementById('perda_carga_hazenwillians_tub_recalqueId').value;
			break; 
			
			default:
				alert('Nenhum valor válido foi digitado');
			break;
		}


		var potencia_AMT = parseFloat(perdas_recalque_tubulacao) + parseFloat(perdas_succao_tubulacao) + parseFloat(potencia_perdas_succao_pecas) 
							+ parseFloat(potencia_perdas_recalque_pecas) +parseFloat(potencia_AGS) + parseFloat(potencia_AGR);
		document.getElementById('potencia_AMT_Id').value = potencia_AMT ; // altura manométrica total


		//calculo da potencia consumida
		var potencia_potencia_consumida = ( (potencia_peso_especifico*potencia_vazao*potencia_AMT)/(75*potencia_rendimento/100 ) );
		//cálculo da potência hidráulica
		var potencia_potencia_hidraulica  = ( (potencia_peso_especifico*potencia_vazao*potencia_AMT)/(75) );


		//atribuindo valor da potência hidráulica
		document.getElementById('potencia_potencia_hidraulicaId').value = potencia_potencia_hidraulica; // potencia consumida
		//atribuindo valor da potencia consumida
		document.getElementById('potencia_consumidaId').value = potencia_potencia_consumida; // potencia consumida
	}

	//copia a vazão para outros campos
	function copiar_vazao(){
		document.getElementById('potencia_vazaoId').value = document.getElementById('vazao_tub_succao_Id').value;
		document.getElementById('vazao_tub_recalque_Id').value = document.getElementById('vazao_tub_succao_Id').value;
	}

//*************************************************************************************************
//			      				DIVISÃO ENTRE SUCÇÃO E RECALQUE								
//*************************************************************************************************
function calcularVelocidadeEscoamento_recalque(){

// zerando variáveis de recalque
	diametro_tub_recalque = null;
	vazao_tub_recalque= null;
	vazao_tub_recalque = null;
	area_tub_recalque = null;
	velocidade_tub_recalque = null;
	viscosidade_cinematica_tub_recalque = null;
	numero_reynolds_tub_recalque = null;

//cálculos para o regime de escoamento da tubulação de SUCÇÃO
    var diametro_tub_recalque= document.getElementById('diametro_tub_recalque_Id').value;    
	var vazao_tub_recalque= document.getElementById('vazao_tub_recalque_Id').value;

//espelhando o valor do diâmetro
	document.getElementById('diametro_perda_carga_recalque_Id').value = diametro_tub_recalque;

	try{

		diametro_tub_recalque = parseFloat(diametro_tub_recalque);
		vazao_tub_recalque = parseFloat(vazao_tub_recalque);

		if(vazao_tub_recalque!='' && diametro_tub_recalque!='' &&vazao_tub_recalque!=null && diametro_tub_recalque!=null){

		area_tub_recalque = (3.141592653589793)*(diametro_tub_recalque/2)*(diametro_tub_recalque/2);
	
		var velocidade_tub_recalque = vazao_tub_recalque/area_tub_recalque;

		document.getElementById('velocidade_tub_recalque_Id').value = velocidade_tub_recalque  ;

		return velocidade_tub_recalque;
	}

	}catch(e){
		document.getElementById('velocidade_tub_recalque_Id').value = '';

	}	
}

	function calcularNumeroReynolds_recalque(){	

		var viscosidade_cinematica_tub_recalque = document.getElementById('viscosidade_cinematica_tub_recalque_Id').value;
		var diametro_tub_recalque = document.getElementById('diametro_tub_recalque_Id').value;
		var velocidade_tub_recalque = document.getElementById('velocidade_tub_recalque_Id').value;

		viscosidade_cinematica_tub_recalque = parseFloat(viscosidade_cinematica_tub_recalque);
		diametro_tub_recalque= parseFloat(diametro_tub_recalque);
		velocidade_tub_recalque = parseFloat(velocidade_tub_recalque);

		var numero_reynolds_tub_recalque = velocidade_tub_recalque*diametro_tub_recalque/viscosidade_cinematica_tub_recalque;

		// classificando o regime de escoamento
		if (numero_reynolds_tub_recalque <= 2000) {
			classificacao_reg_tub_recalque= "Regime laminar";
		}
		if (numero_reynolds_tub_recalque> 2000 & numero_reynolds_tub_recalque <= 4000) {
			classificacao_reg_tub_recalque = "Regime de transição";
		}
		if(numero_reynolds_tub_recalque > 4000){
			classificacao_reg_tub_recalque = "Regime turbulento";
		}

		document.getElementById('numero_reynolds_tub_recalque_Id').value=numero_reynolds_tub_recalque;


		document.getElementById('classificacao_reg_tub_recalque_Id').value=classificacao_reg_tub_recalque;


		return numero_reynolds_tub_recalque;	
	}


function atribuir_valores_paraequacoes_perda_carga_recalque(){
		
		var coefRug_abs_material_tub_recalque = null;// variavel do coeficiente de rugosidade absoluta 
		var coefRug_hazenwillians_material_tub_recalque = null;// variavel do coeficiente de hazen willians
		var coefAtrito_flaman_material_tub_recalque = null;// coeficiente de atrito para flaman

		coefRug_hazenwillians_material_tub_recalque = null;
		coefAtrito_flaman_material_tub_recalque = null;
		
		var tipo_material_tub_recalque = document.getElementById('material_tubulacao_recalqueId').value;

		if ( tipo_material_tub_recalque == 'Aço corrugado (chapa ondulada)' ) {
			coefRug_hazenwillians_material_tub_recalque = 60;
			coefAtrito_flaman_material_tub_recalque = null;
			coefRug_abs_material_tub_recalque = null;
		}else if( tipo_material_tub_recalque == 'Aço com juntas lock-bar, em serviço' ){
			coefRug_hazenwillians_material_tub_recalque = 90;
			coefAtrito_flaman_material_tub_recalque = null;
			coefRug_abs_material_tub_recalque = null;
		}else if( tipo_material_tub_recalque == 'Aço com juntas lock-bar, tubos novos' ){
			coefRug_hazenwillians_material_tub_recalque = 130;
			coefAtrito_flaman_material_tub_recalque = null;
			coefRug_abs_material_tub_recalque = null;
		}else if( tipo_material_tub_recalque == 'Aço galvanizado' ){
			coefRug_hazenwillians_material_tub_recalque = 125;
			coefAtrito_flaman_material_tub_recalque = null;
			coefRug_abs_material_tub_recalque = 0.00015;
		}else if( tipo_material_tub_recalque == 'Aço rebitado, em uso' ){
			coefRug_hazenwillians_material_tub_recalque = 85;
			coefAtrito_flaman_material_tub_recalque = null;
			coefRug_abs_material_tub_recalque = 0.006;
		}else if( tipo_material_tub_recalque == 'aço rebitado, tubos novos' ){
			coefRug_hazenwillians_material_tub_recalque = 110;
			coefAtrito_flaman_material_tub_recalque = null;
			coefRug_abs_material_tub_recalque = 0.003;
		}else if( tipo_material_tub_recalque == 'Aço soldado, em uso' ){
			coefRug_hazenwillians_material_tub_recalque = 90;
			coefAtrito_flaman_material_tub_recalque = null;
			coefRug_abs_material_tub_recalque = null;
		}else if( tipo_material_tub_recalque == 'Aço soldado com revestimento especial' ){
			coefRug_hazenwillians_material_tub_recalque = null;
			coefAtrito_flaman_material_tub_recalque = null;
			coefRug_abs_material_tub_recalque = null;
		}else if( tipo_material_tub_recalque == 'Cobre' ){
			coefRug_hazenwillians_material_tub_recalque = 130;
			coefAtrito_flaman_material_tub_recalque = null;
			coefRug_abs_material_tub_recalque = 0.000015;
		}else if( tipo_material_tub_recalque == 'Concreto, bom acabamento' ){
			coefRug_hazenwillians_material_tub_recalque = null;
			coefAtrito_flaman_material_tub_recalque = null;
			coefRug_abs_material_tub_recalque = null;
		}else if( tipo_material_tub_recalque == 'Ferro fundido, novos' ){
			coefRug_hazenwillians_material_tub_recalque = 130;
			coefAtrito_flaman_material_tub_recalque = 0.000185;
			coefRug_abs_material_tub_recalque = 0.0005;
		}else if( tipo_material_tub_recalque == 'Ferro fundido, usados' ){
			coefRug_hazenwillians_material_tub_recalque = 90;
			coefAtrito_flaman_material_tub_recalque = 0.000230;
			coefRug_abs_material_tub_recalque = 0.005;
		}else if( tipo_material_tub_recalque == 'Ferro fundido, após 15-20 anos de uso' ){
			coefRug_hazenwillians_material_tub_recalque = 100;
			coefAtrito_flaman_material_tub_recalque = null;
			coefRug_abs_material_tub_recalque = 0.005;
		}else if( tipo_material_tub_recalque == 'Ferro revestido de cimento' ){
			coefRug_hazenwillians_material_tub_recalque = 130;
			coefAtrito_flaman_material_tub_recalque = null;
			coefRug_abs_material_tub_recalque = null;
		}else if( tipo_material_tub_recalque == 'Madeira em aduelas' ){
			coefRug_hazenwillians_material_tub_recalque = 120;
			coefAtrito_flaman_material_tub_recalque = null;
			coefRug_abs_material_tub_recalque = null;
		}else if( tipo_material_tub_recalque == 'Tubos plástico (P.V.C, entre outros)' ){
			coefRug_hazenwillians_material_tub_recalque = 150;
			coefAtrito_flaman_material_tub_recalque = 0.000135;
			coefRug_abs_material_tub_recalque = 0.000015;
		}

		document.getElementById('coef_rug_hazenwillians_recalqueId').value = coefRug_hazenwillians_material_tub_recalque ;
		document.getElementById('coef_atrito_flaman_recalqueId').value = coefAtrito_flaman_material_tub_recalque ;
		document.getElementById('coef_rug_abs_darcy_recalqueId').value = coefRug_abs_material_tub_recalque ;
		

	}

	function perda_carga_tub_recalque(){
		//pega o comprimento
		var comprimento_tub_recalque = document.getElementById('comprimento_tub_recalqueId').value;
		//pega o diâmetro
		var diametro_tub_recalque = document.getElementById('diametro_perda_carga_recalque_Id').value;
		//pega a velocidade
		var velocidade_tub_recalque = document.getElementById('velocidade_tub_recalque_Id').value;
		//pega a vazão
		var vazao_tub_recalque = document.getElementById('vazao_tub_recalque_Id').value;

		//pega a rugosidade absoluta
		var rugosidade_abs_tub_recalque = document.getElementById('coef_rug_abs_darcy_recalqueId').value;
		//pega o coeficiente de rugosidade de hazen willians
		var coef_rug_hazenwillians_recalque = document.getElementById('coef_rug_hazenwillians_recalqueId').value;
		//pega o fator de atrito de Flaman
		var coef_atrito_flaman_recalque = document.getElementById('coef_atrito_flaman_recalqueId').value;

		//pega o número de reynolds
		var numero_reynolds_tub_recalque = document.getElementById('numero_reynolds_tub_recalque_Id').value;
		
		//atribui o fator de atrito
		//inico do calculo do fator de atrito
		var a = (rugosidade_abs_tub_recalque/(3.7*diametro_tub_recalque)) + 5.74/Math.pow(numero_reynolds_tub_recalque,0.9);
		 a = Math.log(a);

		var b = Math.pow(2500/numero_reynolds_tub_recalque,6);
		
		var c = a-b;

		var d =Math.pow(c,-16);
		d = 9.5*d;

		var e = Math.pow((64/numero_reynolds_tub_recalque),8);
		var f = d+e;
		var g = Math.pow(f,0.125);
		//fim dos procedimento para calcular o fator de atrito
		var fator_atrito_darcy_recalque = g;
		//atribuição do valor do fator de atrito na tela
		document.getElementById('fator_atrito_darcy_recalqueId').value = fator_atrito_darcy_recalque;
		//calculo da perda de carga pela equação de darcy
		var perda_carga_darcy_tub_recalque = (fator_atrito_darcy_recalque*comprimento_tub_recalque*velocidade_tub_recalque*velocidade_tub_recalque)/(2*diametro_tub_recalque*9.81);
		
		//atribuição do valor da perda de carga calculada pela equação de darcy na tela
		if(perda_carga_darcy_tub_recalque>0){
			document.getElementById('perda_carga_darcy_tub_recalqueId').value = perda_carga_darcy_tub_recalque;
		}else{
			document.getElementById('perda_carga_darcy_tub_recalqueId').value = '';
		}

		

		//início do cálculo da perda de carga por hazen willians
		var hpasso1 = 10.6451 ;
		hpasso1 = hpasso1 * Math.pow(vazao_tub_recalque,1.852) ;
		hpasso1 = hpasso1 * comprimento_tub_recalque;
		var hpasso2 = Math.pow(coef_rug_hazenwillians_recalque,1.852) ;
		hpasso2 = hpasso2 * Math.pow(diametro_tub_recalque,4.871);

		var perda_carga_hazenwillians_tub_recalque = hpasso1/hpasso2;

		perda_carga_hazenwillians_tub_recalque = parseFloat(perda_carga_hazenwillians_tub_recalque);

		//atribução do valor da perda de carga calculado por hazen willians

		if(perda_carga_hazenwillians_tub_recalque>0 ){
			document.getElementById('perda_carga_hazenwillians_tub_recalqueId').value = perda_carga_hazenwillians_tub_recalque;	
		}else{
			document.getElementById('perda_carga_hazenwillians_tub_recalqueId').value = '';
		}

		// fim do cálculo da perda de carga pela equação de hazen willians

		//início dos cálculos da perda de carga por Flaman
		var fpasso1 = 10.107 ;
		fpasso1 = fpasso1 * comprimento_tub_recalque;
		fpasso1 = fpasso1 * coef_atrito_flaman_recalque;
		fpasso1 = fpasso1 * Math.pow(vazao_tub_recalque,1.75);
		var fpasso2 = Math.pow(diametro_tub_recalque,4.76);

		var perda_carga_flamant_tub_recalque = fpasso1/fpasso2;
		// fim dos cálculos da parda de carga por Flaman
		//atribuição do valor da perda de carga por Flaman na tela

		if(perda_carga_flamant_tub_recalque > 0){
			document.getElementById('perda_carga_flamant_tub_recalqueId').value = perda_carga_flamant_tub_recalque;	
		}else{
			document.getElementById('perda_carga_flamant_tub_recalqueId').value = '';
		}

		



	}


	//calcula a perda de carga em peças especiais na tub de recalque
	function perda_pecaespecial_recalque(){
		
		var velocidade_escoamento_recalque = document.getElementById('velocidade_tub_recalque_Id').value;
		var valor_de_k                   = document.getElementById('valor_do_coef_k').value;
		var valor_total_perda_peca_recalque= document.getElementById('perda_pecas_acumulada_tub_recalqueId').value;

		if (parseFloat(valor_total_perda_peca_recalque)){
			valor_total_perda_peca_recalque = valor_total_perda_peca_recalque;
		}else{
			valor_total_perda_peca_recalque = 0;
		}

		var valor_perda_peca_recalque;     
			valor_perda_peca_recalque = (Math.pow(velocidade_escoamento_recalque,2) * valor_de_k)/(2* 9.81) ; 

		//verifica a quantidade de peças
		var quantidade_pecas = prompt ("Quantidade de peças");
		if (parseFloat(quantidade_pecas)){
		
		valor_perda_peca_recalque = valor_perda_peca_recalque * quantidade_pecas;

		var soma_perdas_pecas_recalque ;
		soma_perdas_pecas_recalque     = (parseFloat(valor_total_perda_peca_recalque) + parseFloat(valor_perda_peca_recalque));

		//realiza a soma e atribui ao campo correspondente ao valor da perda de carga por peças especiais
		document.getElementById('perda_pecas_acumulada_tub_recalqueId').value = soma_perdas_pecas_recalque;
		alert("Perda adicionada ao recalque");
		document.getElementById('situacao_perda_pecaEspecial').value = 'Perda adicionada ao recalque';

		doc.text('Hello world!', 1, 1)
		doc.save('two-by-four.pdf')



		}else{
			quantidade_pecas = 0;
			valor_perda_peca_recalque = valor_perda_peca_recalque * quantidade_pecas;
			alert('Algo deu errado!');
		}
	
	}

	//reseta o valor da perda de carga para sucção
	function zerar_perda_pecaespecial_recaalque(){
		document.getElementById('situacao_perda_pecaEspecial').value = 'perda para o recalque foi zerada';
		document.getElementById('perda_pecas_acumulada_tub_recalqueId').value = '0';
	}






