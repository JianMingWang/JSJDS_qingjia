﻿//------------------------------------------------------------------------------
// <auto-generated>
//     此代码已从模板生成。
//
//     手动更改此文件可能导致应用程序出现意外的行为。
//     如果重新生成代码，将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace qingjia_MVC.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class imaw_qingjiaEntities : DbContext
    {
        public imaw_qingjiaEntities()
            : base("name=imaw_qingjiaEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<T_Account> T_Account { get; set; }
        public virtual DbSet<T_Batch> T_Batch { get; set; }
        public virtual DbSet<T_BatchLeave> T_BatchLeave { get; set; }
        public virtual DbSet<T_ChangeBatch> T_ChangeBatch { get; set; }
        public virtual DbSet<T_Class> T_Class { get; set; }
        public virtual DbSet<T_Deadline> T_Deadline { get; set; }
        public virtual DbSet<T_Holiday> T_Holiday { get; set; }
        public virtual DbSet<T_Info> T_Info { get; set; }
        public virtual DbSet<T_InfoDetail> T_InfoDetail { get; set; }
        public virtual DbSet<T_LeaveList> T_LeaveList { get; set; }
        public virtual DbSet<T_Menu> T_Menu { get; set; }
        public virtual DbSet<T_RoleMenu> T_RoleMenu { get; set; }
        public virtual DbSet<T_Statistic> T_Statistic { get; set; }
        public virtual DbSet<T_Student> T_Student { get; set; }
        public virtual DbSet<T_Teacher> T_Teacher { get; set; }
        public virtual DbSet<T_Type> T_Type { get; set; }
        public virtual DbSet<T_Vacation> T_Vacation { get; set; }
        public virtual DbSet<T_NightNameList> T_NightNameList { get; set; }
        public virtual DbSet<T_Role> T_Role { get; set; }
        public virtual DbSet<vw_Class> vw_Class { get; set; }
        public virtual DbSet<vw_ClassBatch> vw_ClassBatch { get; set; }
        public virtual DbSet<vw_LeaveList> vw_LeaveList { get; set; }
        public virtual DbSet<vw_NightNameList> vw_NightNameList { get; set; }
        public virtual DbSet<vw_StudenBatch> vw_StudenBatch { get; set; }
        public virtual DbSet<vw_Student> vw_Student { get; set; }
    
        public virtual ObjectResult<string> sp_getNightNameList(string teacherID)
        {
            var teacherIDParameter = teacherID != null ?
                new ObjectParameter("TeacherID", teacherID) :
                new ObjectParameter("TeacherID", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<string>("sp_getNightNameList", teacherIDParameter);
        }
    }
}
