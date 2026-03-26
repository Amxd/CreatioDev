namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrSailboatEventsSchema

	/// <exclude/>
	public class UsrSailboatEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrSailboatEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrSailboatEventsSchema(UsrSailboatEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("81ac2e23-09fd-431d-a940-49a52c3a6f1b");
			Name = "UsrSailboatEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("3ac8eccb-9516-4513-a725-055a3f8ee7e9");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,81,107,219,48,16,126,47,244,63,28,126,178,33,136,246,117,221,10,75,154,141,66,217,198,236,12,198,216,195,89,190,56,26,178,100,36,57,93,54,250,223,119,178,157,214,117,58,232,129,177,116,250,238,187,251,62,14,12,54,228,91,148,4,5,57,135,222,110,131,88,89,179,85,117,231,48,40,107,206,207,254,158,159,1,71,231,149,169,33,63,248,64,205,213,52,53,45,108,26,107,254,251,232,72,172,77,80,65,145,127,13,70,172,247,100,194,17,250,163,79,31,250,220,157,226,33,12,185,52,151,59,106,240,19,107,128,119,144,108,188,203,81,233,210,98,72,178,159,67,89,219,149,90,73,144,26,189,135,239,40,119,225,5,30,120,3,75,244,244,194,203,64,50,58,48,225,179,123,158,89,85,4,123,171,42,248,108,114,220,179,146,212,150,191,72,6,240,100,42,114,11,24,8,151,180,101,89,61,237,123,87,123,160,236,137,110,194,28,163,228,41,196,35,219,145,134,178,171,231,176,129,23,252,40,150,181,167,67,42,27,74,102,240,138,164,106,80,67,235,148,140,70,29,235,196,71,10,197,161,165,106,101,117,215,152,111,168,59,122,59,130,175,211,104,231,151,88,145,204,219,171,45,164,3,215,53,92,94,244,145,61,71,204,100,197,32,113,235,87,104,36,105,170,120,134,224,58,98,218,83,156,15,46,238,4,111,165,199,154,10,106,90,141,33,78,109,232,30,238,172,68,173,254,96,169,41,239,113,233,163,150,141,39,199,139,107,216,127,222,90,241,149,188,237,156,100,152,117,204,179,128,211,78,49,166,59,51,172,91,178,128,228,164,141,23,189,57,183,190,176,118,169,234,225,150,100,162,176,227,24,217,43,180,68,231,251,132,248,96,93,131,33,157,105,228,198,151,192,94,246,223,38,191,57,241,61,70,216,57,123,223,123,177,254,45,169,141,90,143,60,115,248,195,211,117,60,242,239,225,31,233,11,110,49,242,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("392e1806-84b6-5658-d609-46daf7882e82"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("3ac8eccb-9516-4513-a725-055a3f8ee7e9"),
				CreatedInSchemaUId = new Guid("81ac2e23-09fd-431d-a940-49a52c3a6f1b"),
				ModifiedInSchemaUId = new Guid("81ac2e23-09fd-431d-a940-49a52c3a6f1b")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("81ac2e23-09fd-431d-a940-49a52c3a6f1b"));
		}

		#endregion

	}

	#endregion

}

