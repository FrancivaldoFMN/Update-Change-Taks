(function executeRule(current, previous /*null when async*/) {

	try{

		var log = 'BR CLOSED CHANGE TAKS' + '\n';


		var numero_change = current.sys_id;

		log += 'Sys ID da Change: ' + numero_change + '\n';
		log += 'Numero da Change: ' + current.number + '\n';

		var gr = new GlideRecord('change_task');
		gr.addQuery('change_request', numero_change);
		gr.query();

		while(gr.next()){

			gr.state = 4;
			gr.close_notes = 'Cancelado pois a Mudança foi rejeitada';
			log += 'Atualizou: ' + gr.number + '\n';
			gr.update();	


		}	
	}

	catch(ex) {
		log += 'ERRO: \n';
		log += ex.message + '\n';

	}
	finally{
		log += '*****FIM*****\n';
		gs.info(log);
	}

})(current, previous);