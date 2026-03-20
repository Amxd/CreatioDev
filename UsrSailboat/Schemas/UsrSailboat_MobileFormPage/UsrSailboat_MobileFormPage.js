{
	"viewConfigDiff": [
		{
			"operation": "merge",
			"name": "Tabs",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 1,
					"rowSpan": 1
				}
			}
		},
		{
			"operation": "merge",
			"name": "AreaProfileContainer",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 1,
					"rowSpan": 1
				}
			}
		},
		{
			"operation": "merge",
			"name": "Feed",
			"values": {
				"dataSourceName": "PDS",
				"entitySchemaName": "UsrSailboat"
			}
		},
		{
			"operation": "insert",
			"name": "UsrName",
			"values": {
				"type": "crt.Input",
				"label": "$Resources.Strings.UsrName",
				"control": "$UsrName",
				"placeholder": "",
				"readonly": false,
				"multiline": false,
				"labelPosition": "above",
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 1,
					"rowSpan": 1
				}
			},
			"parentName": "AreaProfileContainer",
			"propertyName": "items",
			"index": 0
		}
	],
	"viewModelConfigDiff": [
		{
			"operation": "merge",
			"path": [
				"attributes"
			],
			"values": {
				"UsrName": {
					"modelConfig": {
						"path": "PDS.UsrName"
					}
				},
				"Id": {
					"modelConfig": {
						"path": "PDS.Id"
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
				"primaryDataSourceName": "PDS"
			}
		},
		{
			"operation": "merge",
			"path": [
				"dataSources"
			],
			"values": {
				"PDS": {
					"type": "crt.EntityDataSource",
					"scope": "page",
					"config": {
						"entitySchemaName": "UsrSailboat",
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
			}
		}
	]
}