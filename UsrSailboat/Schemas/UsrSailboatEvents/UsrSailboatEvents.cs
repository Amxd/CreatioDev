 namespace Terrasoft.Configuration
{
    using System;
    using Terrasoft.Common;
    using Terrasoft.Core.Entities;
    using Terrasoft.Core.Entities.Events;
    [EntityEventListener(SchemaName = "UsrSailboat")]
    public class YachtEntityEventListener : BaseEntityEventListener
    {
        public override void OnSaving(object sender, EntityBeforeEventArgs e)
        {
            base.OnSaving(sender, e);
            Entity sailboat = (Entity)sender;
            decimal price = sailboat.GetTypedColumnValue<decimal>("UsrPrice");
            if (price > 1000000)
            {
                e.IsCanceled = true;

                string messageTemplate = new LocalizableString(sailboat.UserConnection.ResourceStorage, 
                    "UsrSailboatEvents", "LocalizableStrings.ValueIsTooBig.Value").ToString();

                string message = string.Format(messageTemplate, "1 000 000 USD");
                throw new Exception(message);
            }
        }
    }
}