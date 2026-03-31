{
	"viewConfigDiff": [
		{
			"operation": "insert",
			"name": "BarcodeScanner_za9j57u",
			"values": {
				"type": "crt.BarcodeScanner",
				"size": "medium",
				"features": {
					"flashToggle": true
				},
				"enabled": true
			},
			"parentName": "Scaffold",
			"propertyName": "items",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "Input_o4cr2r4",
			"values": {
				"type": "crt.Input",
				"label": "$Resources.Strings.UsrQRCodeTestDS_UsrQRCodeResult_nmv8yse",
				"control": "$UsrQRCodeTestDS_UsrQRCodeResult_nmv8yse",
				"placeholder": "",
				"readonly": false,
				"multiline": false,
				"labelPosition": "auto"
			},
			"parentName": "Scaffold",
			"propertyName": "items",
			"index": 1
		}
	],
	"viewModelConfigDiff": [
		{
			"operation": "merge",
			"path": [],
			"values": {
				"attributes": {
					"UsrQRCodeTestDS_UsrQRCodeResult_nmv8yse": {
						"modelConfig": {
							"path": "UsrQRCodeTestDS.UsrQRCodeResult"
						}
					}
				}
			}
		}
	],
	"modelConfigDiff": [
		{
			"operation": "merge",
			"path": [],
			"values": {
				"dataSources": {
					"UsrQRCodeTestDS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "UsrQRCodeTest",
							"loadParameters": {
								"options": {
									"pagingConfig": {
										"rowCount": 1,
										"rowsOffset": -1
									},
									"sortingConfig": {
										"columns": []
									}
								}
							},
							"allowCopyingRecords": false
						}
					}
				},
				"primaryDataSourceName": "UsrQRCodeTestDS"
			}
		}
	]
}