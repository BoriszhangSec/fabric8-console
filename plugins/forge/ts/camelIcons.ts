/// <reference path="../../includes.ts"/>
  /// <reference path="forgeHelpers.ts"/>

  module Forge {

    export var camelIcons = loadCamelIcons();

    export var camelEndpointIcons = loadCamelEndpointIcons();

    function loadCamelIcons() {
      var answer = {};
      answer = addCamelIcon(answer, 'aggregate24.png');
      answer = addCamelIcon(answer, 'bean24.png');
      answer = addCamelIcon(answer, 'camel.png');
      answer = addCamelIcon(answer, 'camel_context_icon.png');
      answer = addCamelIcon(answer, 'camel_route.png');
      answer = addCamelIcon(answer, 'camel_route_folder.png');
      answer = addCamelIcon(answer, 'camel_tracing.png');
      answer = addCamelIcon(answer, 'channel24.png');
      answer = addCamelIcon(answer, 'channelAdapter24.png');
      answer = addCamelIcon(answer, 'channelPurger24.png');
      answer = addCamelIcon(answer, 'choice24.png');
      answer = addCamelIcon(answer, 'commandMessage24.png');
      answer = addCamelIcon(answer, 'competingConsumers24.png');
      answer = addCamelIcon(answer, 'contentBasedRouter24.png');
      answer = addCamelIcon(answer, 'contentFilter24.png');
      answer = addCamelIcon(answer, 'controlBus24.png');
      answer = addCamelIcon(answer, 'convertBodyTo24.png');
      answer = addCamelIcon(answer, 'correlationIdentifier24.png');
      answer = addCamelIcon(answer, 'datatypeChannel24.png');
      answer = addCamelIcon(answer, 'deadLetterChannel24.png');
      answer = addCamelIcon(answer, 'detour24.png');
      answer = addCamelIcon(answer, 'distributionAggregate24.png');
      answer = addCamelIcon(answer, 'documentMessage24.png');
      answer = addCamelIcon(answer, 'durableSubscription24.png');
      answer = addCamelIcon(answer, 'dynamicRouter24.png');
      answer = addCamelIcon(answer, 'edit_camel_route.png');
      answer = addCamelIcon(answer, 'encapsulatedSynchronous24.png');
      answer = addCamelIcon(answer, 'endoints.png');
      answer = addCamelIcon(answer, 'endpoint24.png');
      answer = addCamelIcon(answer, 'endpointDrools24.png');
      answer = addCamelIcon(answer, 'endpointFile24.png');
      answer = addCamelIcon(answer, 'endpointFolder24.png');
      answer = addCamelIcon(answer, 'endpointQueue24.png');
      answer = addCamelIcon(answer, 'endpointRepository24.png');
      answer = addCamelIcon(answer, 'endpointTimer24.png');
      answer = addCamelIcon(answer, 'endpoint_folder.png');
      answer = addCamelIcon(answer, 'endpoint_node.png');
      answer = addCamelIcon(answer, 'enrich24.png');
      answer = addCamelIcon(answer, 'envelopeWrapper24.png');
      answer = addCamelIcon(answer, 'eventDrivenConsumer24.png');
      answer = addCamelIcon(answer, 'eventMessage24.png');
      answer = addCamelIcon(answer, 'fileTransfer24.png');
      answer = addCamelIcon(answer, 'filter24.png');
      answer = addCamelIcon(answer, 'flow24.png');
      answer = addCamelIcon(answer, 'generic24.png');
      answer = addCamelIcon(answer, 'guaranteedMessaging24.png');
      answer = addCamelIcon(answer, 'idempotentConsumer24.png');
      answer = addCamelIcon(answer, 'invalidMessageChannel24.png');
      answer = addCamelIcon(answer, 'loadBalance24.png');
      answer = addCamelIcon(answer, 'log24.png');
      answer = addCamelIcon(answer, 'marshal24.png');
      answer = addCamelIcon(answer, 'message24.png');
      answer = addCamelIcon(answer, 'messageBroker24.png');
      answer = addCamelIcon(answer, 'messageBus24.png');
      answer = addCamelIcon(answer, 'messageDispatcher24.png');
      answer = addCamelIcon(answer, 'messageExpiration24.png');
      answer = addCamelIcon(answer, 'messageSelector24.png');
      answer = addCamelIcon(answer, 'messageSequence24.png');
      answer = addCamelIcon(answer, 'messageStore24.png');
      answer = addCamelIcon(answer, 'messaging24.png');
      answer = addCamelIcon(answer, 'messagingAdapter24.png');
      answer = addCamelIcon(answer, 'messagingBridge24.png');
      answer = addCamelIcon(answer, 'messagingGateway24.png');
      answer = addCamelIcon(answer, 'multicast24.png');
      answer = addCamelIcon(answer, 'node24.png');
      answer = addCamelIcon(answer, 'normalizer24.png');
      answer = addCamelIcon(answer, 'pipeline24.png');
      answer = addCamelIcon(answer, 'pointToPoint24.png');
      answer = addCamelIcon(answer, 'pollEnrich24.png');
      answer = addCamelIcon(answer, 'pollingConsumer24.png');
      answer = addCamelIcon(answer, 'process24.png');
      answer = addCamelIcon(answer, 'processManager24.png');
      answer = addCamelIcon(answer, 'processor24.png');
      answer = addCamelIcon(answer, 'recipientList24.png');
      answer = addCamelIcon(answer, 'requestReply24.png');
      answer = addCamelIcon(answer, 'resequence24.png');
      answer = addCamelIcon(answer, 'returnAddress24.png');
      answer = addCamelIcon(answer, 'route24.png');
      answer = addCamelIcon(answer, 'routingSlip24.png');
      answer = addCamelIcon(answer, 'setBody24.png');
      answer = addCamelIcon(answer, 'sharedDatabase24.png');
      answer = addCamelIcon(answer, 'smartProxy24.png');
      answer = addCamelIcon(answer, 'split24.png');
      answer = addCamelIcon(answer, 'storeInLibrary24.png');
      answer = addCamelIcon(answer, 'testMessage24.png');
      answer = addCamelIcon(answer, 'transactionalClient24.png');
      answer = addCamelIcon(answer, 'transform24.png');
      answer = addCamelIcon(answer, 'unmarshal24.png');
      answer = addCamelIcon(answer, 'wireTap24.png');
      return answer;
  }


    function loadCamelEndpointIcons() {
      var answer = {};
      answer = addCamelEndpointIcon(answer, 'camel-activemq_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-ahc_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-amqp_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-apns_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-atom_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-avro_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-aws_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-bean-validator_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-bean.svg');
      answer = addCamelEndpointIcon(answer, 'camel-box_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-cache_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-cmis_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-cometd_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-context_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-core_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-couchdb_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-crypto_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-cxf_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-disruptor_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-dns_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-dropbox_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-ejb_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-elasticsearch_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-eventadmin_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-exec_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-facebook_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-file_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-flatpack_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-fop_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-freemarker_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-ftp_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-gae1_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-gae2_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-gae3_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-gae4_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-gae5_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-gae_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-geocoder_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-google-drive_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-guava-eventbus_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-hazelcast_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-hbase_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-hdfs_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-hl7_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-http4_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-http_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-ibatis_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-infinispan_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-irc_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-javaspace_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-jbi_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-jclouds_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-jcr_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-jdbc_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-jetty_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-jing1_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-jing2_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-jing_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-jms_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-jmx_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-jpa_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-jsch_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-jt400_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-kestrel_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-krati_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-ldap_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-leveldb_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-linkedin_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-lucene_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-mail1_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-mail2_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-mail_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-mina2_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-mina_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-mongodb_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-mqtt_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-msv_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-mustache_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-mvel_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-mybatis_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-nagios_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-netty-http_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-netty_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-olingo2_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-paxlogging_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-printer_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-properties_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-quartz2_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-quartz_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-quickfix_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-rabbitmq_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-restlet_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-rmi_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-routebox_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-rss_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-salesforce_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-salesforce_500x400.png');
      answer = addCamelEndpointIcon(answer, 'camel-sap-netweaver_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-sap_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-sap_500x400.png');
      answer = addCamelEndpointIcon(answer, 'camel-saxon_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-scalate_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-servlet_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-servletlistener_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-sip_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-sjms_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-smpp_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-snmp_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-solr_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-spark-rest_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-spring-batch_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-spring-integration_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-spring-ldap_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-spring-redis_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-spring-ws_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-spring1_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-spring2_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-spring3_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-spring_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-sql_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-ssh_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-stax_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-stomp_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-stream_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-stringtemplate_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-timer_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-twitter_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-twitter_500x400.png');
      answer = addCamelEndpointIcon(answer, 'camel-urlrewrite_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-velocity_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-vertx_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-weather_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-websocket_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-xmlrpc_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-xmlsecurity_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-xmpp_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-yammer_200x150.png');
      answer = addCamelEndpointIcon(answer, 'camel-zookeeper_200x150.png');
      answer = addCamelEndpointIcon(answer, 'fabric-camel_200x150.png');
      answer = addCamelEndpointIcon(answer, 'master_200x150.png');
      answer = addCamelEndpointIcon(answer, 'servicemix-camel_200x150.png');
      return answer;
  }

}